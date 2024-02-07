---
title: 'node'
---


# Node

## 国际化插入脚本示例 （ React 版本 ）

> 仅供参考，替换能够处理大多数的实际场景（>=95%），基于替换位置场景的不同，可能还需要手动微调。

```js
import { readFileSync, writeFileSync } from 'node:fs'
const info = {
  path: 'src/utils/utils.tsx',
  i18nObj: {
    utils0: '视频大小不能超过',
    utils1: '请重新调整后再上传',
    utils2: '升级邀请',
    utils3: '立即升级',
    utils4: '请先登录',
    utils5: '您的账号已重复登录',
    utils6: '当前等级不支持',
    utils7: '选择声音类型语言不匹配，请重新选择',
    utils8: '字幕文件解析失败，建议：1.检查字幕是否有正确文本内容；2.字幕文件无法解析请重新上传',
    utils9: '请上传与视频时长相对应时长的字幕文件',
    utils10: '字幕文本内容过多，请上传与视频时长相对应时长的字幕文件',
    utils11: '任务处理超时无响应，请稍后重试',
    utils13: '账号禁用',
    utils14: '您的账号存在异常使用操作，若有疑问请联系客服申诉',
    utils15: '微信扫码添加客服',
    utils16: '语言识别未识别到内容',
    // utils17 未成功替换
    utils17: {
      手机号: {
        0: '更改手机号',
        1: '绑定手机号',
      },
      邮箱: {
        1: '绑定邮箱',
        0: '更改邮箱',
      },
      密码: {
        0: '设置新密码',
        2: '设置密码',
      },
      微信: {
        1: '绑定微信',
        3: '解绑微信',
      },
    },
    utils18: '加载失败',
    utils19: '仅支持拖拽文件或者文件夹',
    utils20: 'headers 中没有 Content Disposition字段',
    utils21: '复制成功',
    utils22: '复制失败',
    // 未成功替换
    utils23: {
      0: '图片翻译任务',
      1: '视频翻译任务',
      2: '视频导出任务',
      3: '视频配音任务',
      4: '配音导出任务',
    },
  },
}

i18nReplace(info)

function i18nReplace(info) {
  let code = readFileSync(info.path, 'utf8')
  const i18nObj = Object.fromEntries(Object.entries(info.i18nObj).sort((a, b) => b[1].length - a[1].length))
  console.log(i18nObj)
  // 注意 以下仅针对字符串替换有效
  for (const key in i18nObj) {
      code = code.replaceAll(`'${i18nObj[key]}'`, `t['${key}']`)
  }
  for (const key in i18nObj) {
    code = code.replaceAll(`"${i18nObj[key]}"`, `t['${key}']`)
  }
  for (const key in i18nObj) {
    code = code.replaceAll(i18nObj[key], `{t['${key}']}`)
  }
  writeFileSync(info.path, code, 'utf8')
}
```

## 读取项目文件（可配置）

```js
const fs = require('fs')
const path = require('path')

const projectPath = './' // 项目根目录
const ignoreDirs = ['node_modules', '.nuxt', 'assets', 'api', 'locales'] // 忽略的目录
const ignoreFiles = ['i18n.js'] // 忽略的文件
const fileRegex = /\.(js|jsx|ts|tsx|vue)$/ // 需要搜索的文件类型

function work(dir,doSomething) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory() && !ignoreDirs.includes(file)) {
      walkDir(fullPath)
    } else if (stat.isFile() && !ignoreFiles.includes(file) && fileRegex.test(file)) {
      doSomething && doSomething(fullPath)
    }
  }
}
```
