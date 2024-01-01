---
title: "uni-app"
---

# uni-app

## request

```js
//config.js
export const requestConfig = {
  timeout: 8000,
  baseUrl: import.meta.env.VITE_API_BASE_URL,
};
```

```js
//XXX.js
import { requestConfig } from "./config.js";

const baseRequest = (method, url, data) => {
  const { baseUrl, timeout } = requestConfig;
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseUrl + url,
      timeout,
      data,
      method,
      header: {
        Authorization: `Bearer ${uni.getStorageSync("token")}`,
      },
      success: (res) => {
        if (res.statusCode === 401) {
          return uni.navigateTo({
            url: "/common/pages/login/index",
          });
        }
        if (!res.statusCode.toString().startsWith("2")) {
          uni.showToast({
            icon: "none",
            title: res.data.error?.message,
          });
          return reject(res.data.error);
        }
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};

const request = {
  get: (url, data) => baseRequest("GET", url, data),
  post: (url, data) => baseRequest("POST", url, data),
  put: (url, data) => baseRequest("PUT", url, data),
  delete: (url, data) => baseRequest("DELETE", url, data),
};

export default request;
```

## pay

```js
export function orderPay({ orderInfo, success, fail }) {
  const dealedOrderInfo = {
    ...orderInfo,
    xxx: "xxx",
    xxx: "xxxx",
    xxxx: "xxx",
  };
  request
    .post("/xxx/xxxx/xxxxx", dealedOrderInfo)
    .then((payInfo) => {
      uni.requestPayment({
        provider: "wxpay",
        ...JSON.parse(payInfo.xxxx), //支付需要的参数
        success,
        fail,
      });
    })
    .catch(fail);
}
```
