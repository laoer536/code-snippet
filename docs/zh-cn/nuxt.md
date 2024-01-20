---
title: 'nuxt'
---

# nuxt2

## 注册一个客户端组件示例（以CKEditor5为例）

```js
//made-client.js
export function madeClient() {
  let BalloonBuildEditor
  let CKEditor
  if (process.client) {
    BalloonBuildEditor = require('@ckeditor/ckeditor5-build-balloon')
    CKEditor = require('@ckeditor/ckeditor5-vue2')
  } else {
    CKEditor = { component: { template: '<div></div>' } }
  }
  return {
    BalloonBuildEditor,
    CKEditor,
  }
}
```

```vue
<template>
  <div class="rich-text">
    <client-only placeholder="加载中...">
      <CKEditor v-model="editorData" :editor="editor" :config="editorConfig" />
    </client-only>
  </div>
</template>

<script>
import { madeClient } from '~/components/bases/rich-text/made-client'
const clientInfo = madeClient()
export default {
  name: 'RichText',
  components: {
    CKEditor: clientInfo.CKEditor.component,
  },
  data() {
    return {
      editor: clientInfo.BalloonBuildEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      },
    }
  },
}
</script>

<style scoped lang="scss"></style>
```

# nuxt3
