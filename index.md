---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "我的文档 "
  text: "前端资料文档"
  tagline: ......
  image:
    src: /images/logo.jpg
    alt: VitePress
    width: 260
    height: 260
    style: {
      borderRadius: 200px,
      overFlow: hidden
    }
  actions:
    - theme: brand
      text: 开始阅读
      link: /wecome.md
    - theme: alt
      text: 关于我们
      link: /about.md

features:
  - title: JavaScript
    details: 快速、简单、高效，JavaScript是现代Web开发语言。
    link: /view/markdown-examples.md
    # linkText: 查看详情
    icon:
      src: /images/icon_javascript.svg
      alt: JavaScript

  - title: Vue.js
    details: 轻松建构响应式界面，Vue.js是你的前端开发新选择。
    icon:
      src: /images/icon_vue.svg
      alt: Vue.js
  - title: Node.js
    details: 掌握它，成为全栈大神。
    linkText: 查看详情
    icon:
      src: /images/icon_nginx.svg
      alt: Node.js
  - title: 插件大全
    details: 常用实用插件。
    link: /view/plugin.md
    icon:
      src: /images/icon_nginx.svg
      alt: Node.js
---

