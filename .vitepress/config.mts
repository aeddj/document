import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/document/',
  title: "我的文档",
  description: "我的文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/wecome' },
      { text: '导航', link: '/link' },
      { text: '关于我们', link: '/about' },
    ],

    sidebar: [
      {
        text: '开始',
        link: '/wecome'
      },
      {
        text: '文档',
        items: [
          { text: 'css', link: '/view/markdown-examples' },
          { text: 'js', link: '/view/api-examples' },
          { text: 'python', link: '/view/api-examples' },
          { 
            text: 'vue', 
            collapsed: true,
            link: '/view/vue@2x',
            items: [
              { text: 'vue2', link: '/view/vue@2x.md' },
              { text: 'vue3', link: '/view/vue@3x.md' },
            ]
           },
          { 
            text: '前端常用插件、工具类库汇总', 
            link: '/view/plugin'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
