---
title: 'node'
---


# Node

## Example of internationalization insertion script

> FYI, the replacement is capable of handling most real-world scenarios (>=95%), depending on the replacement location, which may also require manual adjustments.

```js
import { readFileSync, writeFileSync } from 'node:fs'
const info = {
  path: 'src/utils/utils.tsx',
  i18nObj: {
    utils0: 'The video size cannot be exceeded',
    utils1: 'Please readjust before uploading',
    utils2: 'Upgrade Invite',
    utils3: 'Upgrade now',
    utils4: 'Please log in first',
    utils5: 'Your account has been logged in repeatedly',
    utils6: 'Not supported at current level',
    utils7: 'Select voice type language does not match, please re-select',
    utils8: 'Subtitle file parsing failed, suggestion: 1. Check whether the subtitle has the correct text content;2. Please upload the subtitle file again if it cannot be parsed',
    utils9: 'Please upload a subtitle file corresponding to the length of the video',
    utils10: 'There is too much subtitle text, please upload a subtitle file corresponding to the video duration',
    utils11: 'No response at task processing timeout, please try again later',
    utils13: 'Account disabled',
    utils14: 'There is an abnormal operation in your account, if you have any questions, please contact customer service to complain',
    utils15: 'WeChat scan code to add customer service',
    utils16: 'Language recognition did not recognize content',
    //was not successfully replaced
    utils17: {
      'Mobile number': {
        0: 'Change phone number',
        1: 'Bind mobile phone number',
      },
      'E-mail': {
        1: 'Bind mailbox',
        0: 'Change mailbox',
      },
      password: {
        0: 'Set a new password',
        2: 'Set Password',
      },
      WeChat: {
        1: 'Bind WeChat',
        3: 'Unbind WeChat',
      },
    },
    utils18: 'failed to load',
    utils19: 'Only support dragging and dropping files or folders',
    utils20: 'There is no Content Disposition field in headers',
    utils21: 'Replication successful',
    utils22: 'Replication failed',
    //Replacement was not successful
    utils23: {
      0: 'Image Translation Task',
      1: 'Video Translation Task',
      2: 'Video export task',
      3: 'Video Dubbing Mission',
      4: 'Dubbing Export Task',
    },
  },
}

i18nReplace(info)

function i18nReplace(info) {
  let code = readFileSync(info.path, 'utf8')
  const i18nObj = Object.fromEntries(Object.entries(info.i18nObj).sort((a, b) => b[1].length - a[1].length))
  console.log(i18nObj)
  // Note: The following is only valid for string substitutions
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
