---
title: 'uni-app'
---

# uni-app

## request

```js
//config.js
export const requestConfig = {
  timeout: 8000,
  baseUrl: import.meta.env.VITE_API_BASE_URL,
}
```

```js
//XXX.js
import { requestConfig } from './config.js'

const baseRequest = (method, url, data) => {
  const { baseUrl, timeout } = requestConfig
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseUrl + url,
      timeout,
      data,
      method,
      header: {
        Authorization: `Bearer ${uni.getStorageSync('token')}`,
      },
      success: (res) => {
        if (res.statusCode === 401) {
          return uni.navigateTo({
            url: '/common/pages/login/index',
          })
        }
        if (!res.statusCode.toString().startsWith('2')) {
          uni.showToast({
            icon: 'none',
            title: res.data.error?.message,
          })
          return reject(res.data.error)
        }
        resolve(res.data)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}

const request = {
  get: (url, data) => baseRequest('GET', url, data),
  post: (url, data) => baseRequest('POST', url, data),
  put: (url, data) => baseRequest('PUT', url, data),
  delete: (url, data) => baseRequest('DELETE', url, data),
}

export default request
```

## pay

```js
export function orderPay({ orderInfo, success, fail }) {
  const dealedOrderInfo = {
    ...orderInfo,
    xxx: 'xxx',
    xxx2: 'xxxx',
    xxxx: 'xxx',
  }
  request
    .post('/xxx/xxxx/xxxxx', dealedOrderInfo)
    .then((payInfo) => {
      uni.requestPayment({
        provider: 'wxpay',
        ...JSON.parse(payInfo.xxxx), //支付需要的参数
        success,
        fail,
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
```

## Real time recording

```js
export function realTimeShow({ srcLanguage, tarLanguage, success }) {
  const recorderManager = uni.getRecorderManager()
  let recorderManagerBuffer = new ArrayBuffer(0)
  recorderManager.onFrameRecorded(({ frameBuffer, isLastFrame }) => {
    const curUint8Array = new Uint8Array(frameBuffer)
    const preUint8Array = new Uint8Array(recorderManagerBuffer)
    const combinedBuffer = new ArrayBuffer(frameBuffer.byteLength + recorderManagerBuffer.byteLength)
    const combinedArray = new Uint8Array(combinedBuffer)
    for (let i = 0; i < recorderManagerBuffer.byteLength; i++) {
      combinedArray[i] = preUint8Array[i]
    }
    for (let i = 0; i < frameBuffer.byteLength; i++) {
      combinedArray[recorderManagerBuffer.byteLength + i] = curUint8Array[i]
    }
    recorderManagerBuffer = combinedBuffer
    request
      .post(`/api/xxx/xxxx/xxxxxx?srcLanguage=${srcLanguage}&targetLanguage=${tarLanguage}`, recorderManagerBuffer, {
        'Content-Type': 'application/octet-stream',
      })
      .then((data) => {
        success && success(data)
        if (isLastFrame) {
          recorderManagerBuffer = new ArrayBuffer(0)
        }
      })
  })

  return {
    recorderManager,
  }
}
```
