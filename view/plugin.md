---
outline: deep
---

## 官网 响应式 模板合集 -100多个   
::: info website-templates
github: [https://github.com/learning-zone/website-templates?tab=readme-ov-file](https://github.com/learning-zone/website-templates?tab=readme-ov-file)

官网：[https://htmlrev.com/](https://htmlrev.com/)
:::

## 公共api大全

**大全**
```js
https://api.vvhan.com/ // 免费接口大全
https://github.com/public-apis/public-apis
```

**api**
```js
https://api.chucknorris.io/jokes/random // 随机笑话
https://api.chucknorris.io/jokes/categories // 笑话类别
https://api.chucknorris.io/jokes/search?query=cat // 搜索笑话
https://api.chucknorris.io/jokes/random?category=dev // 随机笑话

https://api.vvhan.com/api/text/joke?type=json // 随机笑话

https://api.xygeng.cn/one // 获取名言警句

https://randomuser.me/api/?results=2 // 随机用户信息

https://freeapi.pub/ip/getipinfo?ip=您的IP地址 // 获取IP城市信息

https://api.thedogapi.com/v1/images/search?size=full // 随机图片

https://picsum.photos/ // 随机图片
```

## 【vuepress】快速搭建md博客  
- [官网https://vuepress.vuejs.org/zh/](https://vuepress.vuejs.org/zh/)
- [教程https://juejin.cn/post/7077498041921437704](https://juejin.cn/post/7077498041921437704)
> vue官网就是用它搭建的

### vue工具集合
::: info vueUse 
[http://www.vueusejs.com/](http://www.vueusejs.com/)

[https://inhiblab-core.gitee.io/docs/hooks/](https://inhiblab-core.gitee.io/docs/hooks/)
:::

### vue3项目所用库  
- [bbs论坛项目](http://easybbs.wuhancoder.com/post/bQizOUijyMZRQbi)
  - 所有依赖
  ```js
  npm install @kangc/v-md-editor@next @wangeditor/editor @wangeditor/editor-for-vue@next axios vue-router element-plus highlight.js js-md5 sass sass-loader vue-cookies vuex --save
  ```
  ```js
  // v-md-editor 是基于 Vue 开发的 markdown 编辑器组件
  https://code-farmer-i.github.io/vue-markdown-editor/zh/

  // editor 富文本编辑器组件
  https://editorjs.io/

  // highlightjs代码高亮
  https://www.fenxianglu.cn/highlightjs/docs/start/

  // js-md5  md5加密

  // vue-cookies 本地存储
  //引入cookies
  import VueCookies from 'vue-cookies'
  app.config.globalProperties.VueCookies = VueCookies // 注册为全局方法
  proxy.VueCookies.set('loginInfo', {use:asd, pwd:123}, '7d') // 存储一个key为loginInfo的cookie,时间为7天
  console.log(proxy.VueCookies.get('loginInfo').pwd) // 获取指定cookie的值
  proxy.VueCookies.remove('loginInfo') // 清除该cookie
  ```
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//引入cookies
import VueCookies from 'vue-cookies'
//引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//图标 图标在附件中  
import '@/assets/icon/iconfont.css'

import './assets/base.scss'

// 自定义全局组件
import Dialog from '@/components/Dialog.vue'

// 自定义全局规则
import rule from '@/utils/rules'

const app = createApp(App)

app.use(router)

app.use(ElementPlus)

app.component('Dialog', Dialog)

app.config.globalProperties.VueCookies = VueCookies

app.config.globalProperties.$globalInfo = {
  bodyWidth: 1300
}

app.config.globalProperties.$rules = rule

app.mount('#app')

```