---
title: 'gitlab'
---

# gitlab

## shell版本 ci yaml

> 注意：这里用的是Windows版本的gitlab-runner。方便使用内置命令。

```yaml
stages:
  - deploy

部署:
  stage: deploy
  only:
    - main
  script:
    - pnpm i
    - pnpm release:local # 参考：https://github.com/laoer536/vite3.0-react18-TypeScript-router-dom6-mobx6-Eslint-prettier-template
```
