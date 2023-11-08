---
external: false
title: "uni-app"
description: "uni-app related code snippets."
date: "2023-02-17"
---

## request

```js
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
        Entry: "1",
      },
      sslVerify: false,
      success: (res) => {
        if (res.statusCode === 401) {
          uni.navigateTo({
            url: "/common/pages/login/index",
          });
          return;
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
