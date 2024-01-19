---
title: 'audio'
---

# 封装一个audio控制器

> 提供一个思路，本次采用nuxt2 + elementui

```js
//commonjs
/**
* 时间过滤器, 将10.123格式的秒钟，默认转换成00:00:00格式
* @param {Number} seconds 总时间，单位是s
* @param {Boolean} flag 若为true，则转为00:00:00.000格式
* @returns {String}
*/
export const timeFormat = (seconds, flag = false) => {
  const hour = Math.floor(seconds / 3600) >= 10 ? Math.floor(seconds / 3600) : '0' + Math.floor(seconds / 3600)
  seconds -= 3600 * hour
  const min = Math.floor(seconds / 60) >= 10 ? Math.floor(seconds / 60) : '0' + Math.floor(seconds / 60)
  seconds -= 60 * min
  if (flag) {
    seconds = seconds.toFixed(3)
  } else {
    seconds = Math.floor(seconds)
  }
  const sec = seconds >= 10 ? seconds : '0' + seconds
  return hour + ':' + min + ':' + sec
}

/**
 * 时间过滤器, 将00:00:00,123格式的时间转换成秒钟，3.123格式
 * @param {String} strTime 00:00:00格式的时间
 * @returns {Number}
 */
export const timestampFormat = (strTime) => {
  if (strTime) {
    const arr = strTime.split(':')
    const hour = Number(arr[0]) * 3600
    const min = Number(arr[1]) * 60
    const sec = Number(arr[2].replace(',', '.'))
    return NP.plus(hour, min, sec)
  }
}

/** 日期过滤器
 * @param {String} type 转时间方式  YYYY=年2019 YY=年19 MM=月 DD=天 hh:时 mm:分 ss:秒
 * @param {String | Date | Number} val 时间格式 可以是时间戳 可以是时间
 * */

export const dateFormat = (type, val) => {
  const date = val ? new Date(/^[0-9]*$/g.test(val) ? Number(val) : val) : new Date()
  const YYYY = String(date.getFullYear())
  const YY = String(date.getFullYear()).substr(2)
  const m = date.getMonth() + 1
  const MM = m > 9 ? String(m) : '0' + m
  const d = date.getDate()
  const DD = d > 9 ? String(d) : '0' + d
  const h = date.getHours()
  const hh = h > 9 ? String(h) : '0' + h
  const $m = date.getMinutes()
  const mm = $m > 9 ? String($m) : '0' + $m
  const s = date.getSeconds()
  const ss = s > 9 ? String(s) : '0' + s
  const obj = { YYYY, YY, MM, DD, hh, mm, ss }
  return type.replace(/(YYYY)|(YY)|(MM)|(DD)|(hh)|(mm)|(ss)/g, (key) => obj[key])
}
```

```vue
<template>
  <div class="audio-bar">
    <audio ref="my-audio" class="audio-element" :src="audioUrl"></audio>
    <div class="process-container">
      <!--当前时间显示-->
      <div class="process-value" :style="{ width: (currentTime / totalTime) * 100 + '%' }"></div>
    </div>
    <div class="control-container">
      <div class="time">
        <span>{{ timeFormat(currentTime) }}/{{ timeFormat(totalTime) }}</span>
      </div>
      <div class="play">
        <!--后退5s-->
        <img
          class="process"
          src="@/assets/img/speech-tran/audio-bar/back-process.png"
          alt=""
          @click="processControl('backOff')"
        />
        <!--开始播放-->
        <img
          v-show="!voiceIsPlay"
          class="start"
          src="@/assets/img/speech-tran/audio-bar/start-play.png"
          alt=""
          @click="play"
        />
        <!--暂停播放-->
        <img
          v-show="voiceIsPlay"
          class="start"
          src="@/assets/img/speech-tran/audio-bar/pause-play.png"
          alt=""
          @click="pause"
        />
        <!--前进5s-->
        <img
          class="process"
          src="@/assets/img/speech-tran/audio-bar/go-process.png"
          alt=""
          @click="processControl('advance')"
        />
      </div>
      <div class="other">
        <el-popover placement="top" title="" width="70" trigger="click" popper-class="audio-speed-popover">
          <button slot="reference" class="speed">
            <span>{{ curSpeed.toFixed(1) }}x</span>
          </button>
          <div class="speed-content">
            <!--速度控制-->
            <div
              v-for="item in speedList"
              :key="item"
              :class="{ selected: item === curSpeed }"
              @click="setAudioSpeed(item)"
            >
              <span>{{ item.toFixed(1) }}x</span>
            </div>
          </div>
        </el-popover>
        <el-popover placement="top" title="" width="120" trigger="click" popper-class="mute-control-popover">
          <button slot="reference" class="mute-control">
            <img src="@/assets/img/speech-tran/audio-bar/not-mute.png" alt="" />
          </button>
          <div class="mute-control-content">
            <!--音量控制-->
            <input
              v-model="volume"
              class="mute"
              type="range"
              name="volume"
              min="0"
              max="1"
              step="0.01"
              :style="{
                '--process-value': volume * 100 + '%',
              }"
            />
          </div>
        </el-popover>
      </div>
    </div>
  </div>
</template>
<script>
import { timeFormat } from '@/utils/common'

export default {
  name: 'AudioBar',
  props: {
    audioUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      totalTime: 0,
      curSpeed: 1,
      volume: 1,
      abortController: null,
      speedList: [3, 2, 1.5, 1, 0.5],
    }
  },
  computed: {
    currentTime() {
      return this.$store.state.editSpeech.currentTime
    },
    voiceIsPlay() {
      return this.$store.state.editSpeech.voiceIsPlay
    },
  },
  watch: {
    volume(v) {
      this.$refs['my-audio'].volume = v
    },
  },
  mounted() {
    this.$refs['my-audio'].onloadedmetadata = (e) => {
      this.totalTime = e.target.duration
    }
    this.$refs['my-audio'].ontimeupdate = (e) => {
      this.$store.commit('editSpeech/setCurrentTime', e.target.currentTime)
    }
    this.spaceKeyEnroll()
  },
  beforeDestroy() {
    this.abortController.abort()
  },
  methods: {
    timeFormat,
    spaceKeyEnroll() {
      // 全局监听空格键操作，实现开始和暂停播放控制。
      this.abortController = new AbortController()
      document.addEventListener(
        'keydown',
        (event) => {
          // 检查按下的键是否是空格键
          if (event.code === 'Space') {
            event.preventDefault()
            if (this.voiceIsPlay) {
              this.pause()
            } else {
              this.play()
            }
          }
        },
        { signal: this.abortController.signal }
      )
    },
    play() {
      this.$refs['my-audio'].play()
      this.$store.commit('editSpeech/setVoiceIsPlay', true)
    },
    pause() {
      this.$refs['my-audio'].pause()
      this.$store.commit('editSpeech/setVoiceIsPlay', false)
    },
    processControl(type, time = 5) {
      if (type === 'backOff') {
        this.$refs['my-audio'].currentTime -= time
      } else {
        this.$refs['my-audio'].currentTime += time
      }
    },
    setAudioSpeed(speed) {
      this.$refs['my-audio'].playbackRate = speed
      this.curSpeed = speed
    },
  },
}
</script>

<style lang="scss">
.el-popper{
  &.audio-speed-popover {
    .speed-content {
      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        border-radius: 6px 6px 6px 6px;
        cursor: pointer;
        &:hover {
          background: rgba(163, 155, 255, 0.2);
        }
        &.selected {
          background: rgba(163, 155, 255, 0.2);
        }
        span {
          font-size: 14px;
          font-weight: 400;
          color: #585e8f;
          line-height: 22px;
        }
      }
    }
  }
  &.mute-control-popover {
    transform: rotate(-90deg) translate(54px, 30px);
    .mute-control-content {
      height: 24px;
      input.mute {
        width: 100%;
        appearance: none;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: var(--process-value);
          height: 4px;
          pointer-events: none;
          background: #7266ff;
        }
        &::-webkit-slider-runnable-track {
          width: 100%;
          height: 4px;
          background: #eeeeee;
          border-radius: 2px 2px 2px 2px;
        }
        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          width: 4px;
          height: 8px;
          background: #7266ff;
          cursor: pointer;
          border-radius: 2px;
          margin-top: -2px; /* 使滑块垂直居中 */
        }
      }
    }
  }
}
</style>
<style scoped lang="scss">
.audio-bar {
  //height: 100px;
  padding: 15px 40px 13px;
  background: #ffffff;
  box-shadow: 0px -5px 10px 0px rgba(114, 102, 255, 0.1);
  .audio-element {
    position: fixed;
    left: -99px;
    top: -99px;
    display: none;
  }
  .process-container {
    height: 10px;
    background: #eeeeee;
    border-radius: 10px 10px 10px 10px;
    position: relative;
    .process-value {
      width: 0;
      height: 14px;
      background: #7266ff;
      border-radius: 10px 10px 10px 10px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      transition: width 0.2s linear;
    }
  }
  .control-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .time {
      span {
        font-size: 14px;
        font-weight: 500;
        color: #9ba2b4;
        line-height: 22px;
      }
    }
    .play {
      display: flex;
      align-items: center;
      gap: 26px;
      img {
        cursor: pointer;
      }
      img.process {
        width: 27px;
        height: 25px;
      }
      img.start {
        width: 52px;
        height: 38px;
      }
    }
    .other {
      display: flex;
      align-items: center;
      gap: 10px;
      .speed {
        width: 50px;
        height: 30px;
        background: rgba(163, 155, 255, 0.2);
        border-radius: 40px 40px 40px 40px;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          font-size: 14px;
          font-weight: 500;
          color: #9ba2b4;
          line-height: 22px;
        }
      }
      .mute-control {
        width: 30px;
        height: 30px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
```

