---
outline: [1, 6]
layout: doc
sidebar: false
---

<script setup>
import { ref } from 'vue'

const gridDate = [
  [
    { title: 'website-templates', info: '官网 响应式 模板合集。' , url: 'https://github.com/xiaoxian521/vue-pure-admin/tree/master/src/views/website-templates'},
    { title: 'htmlrev templates', info: '1500+官网模板合集。' , url: 'https://htmlrev.com/'},
  ],
  [
    { title: 'vvhan', info: '韩小韩WebAPI免费接口。' , url: 'https://api.vvhan.com/'},
    { title: 'vvhan-github', info: '免费接口大全。' , url: 'https://github.com/public-apis/public-apis'},
    { title: 'chucknorris-random', info: '随机笑话' , url: 'https://api.chucknorris.io/jokes/random'},
    { title: 'chucknorris-categories', info: '笑话类别' , url: 'https://api.chucknorris.io/jokes/categories'},
    { title: 'chucknorris-search', info: '搜索笑话' , url: 'https://api.chucknorris.io/jokes/search?query=cat'},
    { title: 'chucknorris-random', info: '随机笑话' , url: 'https://api.chucknorris.io/jokes/random?category=dev'},
    { title: 'vvhan-joke', info: '随机笑话' , url: 'https://api.vvhan.com/api/text/joke?type=json'},
    { title: 'xygeng', info: '名言警句' , url: 'https://api.xygeng.cn/one'},
    { title: 'randomuser', info: '随机用户信息' , url: 'https://randomuser.me/api/?results=2'},
    { title: 'freeapi', info: '获取IP城市信息' , url: 'https://freeapi.pub/ip/getipinfo?ip=127.0.0.1'},
    { title: 'thedogapi', info: '随机图片' , url: 'https://api.thedogapi.com/v1/images/search?size=full'},
    { title: 'picsum', info: '随机图片' , url: 'https://picsum.photos/'},
  ],
  [
    { title: 'tailwindcss', info: 'css原子化' , url: 'https://www.tailwindcss.cn/'},
  ],
]

function toWeb(item) {
  window.open(item.url)
}
</script>

# 官网 响应式 模板合集 -100多个
<div class='grid'>
  <div class='item' @click='toWeb(item)' v-for='(item, index) in gridDate[0]' :key='"0"+index'>
    <div class='title'>{{item.title}}</div>
    <div class='info'>{{item.info}}</div>
  </div>
</div>

# 公共api大全
<div class='grid'>
  <div class='item' @click='toWeb(item)' v-for='(item, index) in gridDate[1]' :key='"1"+index'>
    <div class='title'>{{item.title}}</div>
    <div class='info'>{{item.info}}</div>
  </div>
</div>

<style scoped>
h1{
  margin: 40px 0 30px;
  font-weight: 600;
  font-size: 24px;
}
.grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  flex-wrap: wrap;
}
.item{
  border-radius: 10px;
  background-color: #f6f6f7;
  padding: 24px;
  cursor: pointer;
}
.title{
  color: #3c3c43;
  font-size: 16px;
}
.info{
  margin-top: 8px;
  color: #3c3c43c7;
  font-size: 14px;
}
.item:hover{
  box-shadow: 0 0 8px #22222220;
}
</style>