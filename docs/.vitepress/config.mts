import {defineConfig} from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "code-snippet",
  description: "laoer536代码片段收集。",
  base: "/code-snippet/",
  lastUpdated: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://s2.loli.net/2021/12/16/rxjhMFtGElVIuyz.png",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    'zh-cn': {
      label: '简体中文',
      lang: 'zh-CN', // optional, will be added  as `lang` attribute on `html` tag
    }
  },
  themeConfig: {
    logo: "https://s2.loli.net/2021/12/16/rxjhMFtGElVIuyz.png",
    editLink: {
      pattern: 'https://github.com/laoer536/code-snippet/edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: 'About me', link: '/me' }
    ],

    sidebar: [
      {
        // text: '开始',
        // collapsed:true,
        items: [
          { text: "uniapp", link: "/uniapp" },
          { text: "axios", link: "/axios" },
          { text: "electron", link: "/electron" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/laoer536/code-snippet" },
    ],

    footer:{
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present laoer536'
    }
  },
});
