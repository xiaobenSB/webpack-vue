<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <h2>Essential Links</h2>
  <div v-if="yes">显示</div>
  <div v-else  @click="clickHot()">不显示</div>
  <div v-show="yes">show</div>
  <router-link to="/login">登录</router-link>
  <ul v-for="(item,index) in items">
    <li>{{item.title}}</li>
    <li>{{item.description}}</li>
  </ul>
  <div class="block">
    <span class="demonstration">大于 7 页时的效果</span>
    <el-pagination layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</div>
</template>

<script>
import {a} from '../http'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎你',
      yes: false,
      items: [{
        title: 'vue',
        description: '学习vue'
      },
      {
        title: 'react',
        description: '学习react'
      },
      {
        title: 'node',
        description: '学习node'
      },
      {
        title: 'webpack',
        description: '学习webpack'
      }
      ]
    }
  },
  methods: {
    clickHot () {
      var that = this
      that.yes = !that.yes
      a().then(function (response) { that.msg = response.data })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
