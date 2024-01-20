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
    - pnpm release:local
```
