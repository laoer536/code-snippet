---
title: 'gitlab'
---

# gitlab

## shell ci template

> Note: use gitlab-runner Windows version. Convenient to use built-in commands.

```yaml
stages:
  - deploy

部署:
  stage: deploy
  only:
    - main
  script:
    - pnpm i
    - pnpm release:local # Reference：https://github.com/laoer536/vite3.0-react18-TypeScript-router-dom6-mobx6-Eslint-prettier-template
```
