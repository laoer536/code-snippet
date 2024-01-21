---
title: 'audio'
---

# Encapsulate an audio controller

> To provide an idea, this time using Nuxt2 + ElementUI

```js
//commonjs
/**
 * Time filter, converts seconds in 10.123 format to 00:00:00 format by default
 * @param {Number} seconds the total time in s
 * @param {Boolean} flag If true, the format is changed to 00:00:00.000
 * @returns {String}
 */
export const timeFormat = (seconds, flag = false) => {
  const hour =
    Math.floor(seconds / 3600) >= 10
      ? Math.floor(seconds / 3600)
      : '0' + Math.floor(seconds / 3600)
  seconds -= 3600 * hour
  const min =
    Math.floor(seconds / 60) >= 10
      ? Math.floor(seconds / 60)
      : '0' + Math.floor(seconds / 60)
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
 * Time filter, converts time in 00:00:00, 123 format to seconds, 3.123 format
 * @param {String} strTime Time in 00:00:00 format
 * @returns {Number}
 */
export const timestampFormat = (strTime) => {
  if (strTime) {
    const arr = strTime.split(':')
    const hour = Number(arr[0]) * 3600
    const min = Number(arr[1]) * 60
    const sec = Number(arr[2].replace(',', '.'))
    return hour * 60 * 60 + min * 60 + sec
  }
}

/** Date filter
 * @param {String} type Conversion time mode YYYY=Year 2019 YY=Year 19 MM=Month DD=Day hh:Hour mm:Minutes ss:Seconds
 * @param {String | Date | Number} val The time format can be a timestamp or a time
 * */

export const dateFormat = (type, val) => {
  const date = val
    ? new Date(/^[0-9]*$/g.test(val) ? Number(val) : val)
    : new Date()
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
  return type.replace(
    /(YYYY)|(YY)|(MM)|(DD)|(hh)|(mm)|(ss)/g,
    (key) => obj[key],
  )
}
```

```vue
<template>
  <div class="audio-bar">
    <audio ref="my-audio" class="audio-element" :src="audioUrl"></audio>
    <!-- Progress bar -->
    <div class="process-container">
      <div
        class="process-value"
        :style="{ width: (currentTime / totalTime) * 100 + '%' }"
      ></div>
    </div>
    <div class="control-container">
      <!-- The current time is displayed. -->
      <div class="time">
        <span>{{ timeFormat(currentTime) }}/{{ timeFormat(totalTime) }}</span>
      </div>
      <div class="play">
        <!-- rewind 5s -->
        <img
          class="process"
          src="@/assets/img/speech-tran/audio-bar/back-process.png"
          alt="rewind 5s"
          @click="processControl('backOff')"
        />
        <!-- Start playing -->
        <img
          v-show="!voiceIsPlay"
          class="start"
          src="@/assets/img/speech-tran/audio-bar/start-play.png"
          alt="Start playing"
          @click="play"
        />
        <!-- Pause playback -->
        <img
          v-show="voiceIsPlay"
          class="start"
          src="@/assets/img/speech-tran/audio-bar/pause-play.png"
          alt="Pause playback"
          @click="pause"
        />
        <!-- forward 5s-->
        <img
          class="process"
          src="@/assets/img/speech-tran/audio-bar/go-process.png"
          alt="forward 5s"
          @click="processControl('advance')"
        />
      </div>
      <div class="other">
        <el-popover
          placement="top"
          title=""
          width="70"
          trigger="click"
          popper-class="audio-speed-popover"
        >
          <button slot="reference" class="speed">
            <span>{{ curSpeed.toFixed(1) }}x</span>
          </button>
          <div class="speed-content">
            <!-- Speed control -->
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
        <el-popover
          placement="top"
          title=""
          width="120"
          trigger="click"
          popper-class="mute-control-popover"
        >
          <button slot="reference" class="mute-control">
            <img src="@/assets/img/speech-tran/audio-bar/not-mute.png" alt="" />
          </button>
          <div class="mute-control-content">
            <!-- Volume control -->
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
      // Listen globally for space key operations to start and pause playback controls.
      this.abortController = new AbortController()
      document.addEventListener(
        'keydown',
        (event) => {
          // Check if the key you pressed is a space key.
          if (event.code === 'Space') {
            event.preventDefault()
            if (this.voiceIsPlay) {
              this.pause()
            } else {
              this.play()
            }
          }
        },
        { signal: this.abortController.signal },
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
.el-popper {
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
