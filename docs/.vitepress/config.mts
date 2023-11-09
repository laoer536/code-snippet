import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "code-snippet",
  description: "laoer536代码片段收集。",
  base:'/code-snippet/',
  lastUpdated:true,
  head: [['link', { rel: 'icon', href: 'https://s2.loli.net/2021/12/16/rxjhMFtGElVIuyz.png' }]],
  themeConfig: {
    logo:'https://s2.loli.net/2021/12/16/rxjhMFtGElVIuyz.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        // text: '开始',
        // collapsed:true,
        items: [
          { text: 'uniapp', link: '/uniapp' },
          { text: 'axios', link: '/axios' },
        ]

      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/laoer536/code-snippet' }
    ]
  }
})
