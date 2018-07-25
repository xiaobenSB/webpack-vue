<template>
<div class="forms">
  <div v-html="message">

  </div>
  <input class="form-control" id="inputEmail3" placeholder="请输入账号" v-model="userinfo.account">
  <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="userinfo.password">
  <button type="submit" class="btn btn-default" @click="login">登录</button>
  <button type="submit" class="btn btn-default" @click="register">注册</button>
  <button type="submit" class="btn btn-default" @click="test">数据</button>
  <router-link to="/index">返回首页</router-link>
</div>
</template>

<script>
export default {
  data () {
    return {
      userinfo: {
        account: '',
        password: '',
        directionId: 'ddd'
      },
      message: '<h3>请登录</h3>'
    }
  },
  methods: {
    test () {
      console.log(this.axios.defaults.msg)
    },
    login () {
      // 获取已有账号密码
      // console.log(this)
      this.register()
      this.axios.get('/apptest')
        .then((response) => {
          // 响应成功回调
          console.log(response)
          this.test()
          // this.$router.go({name: 'main'})// 不管用
          // this.$router.push({
          //   name: 'HelloWorld'
          // })
        }).catch(e => {
          // 打印一下错误
          console.log(e)
        })
    },
    register () {
      // console.log(this)
      // 获取已有账号密码
      let params = {
        user: this.userinfo.account,
        password: this.userinfo.password,
        directionId: this.userinfo.directionId
      }
      this.axios.post('/signup', params)
        .then((response) => {
          // 响应成功回调
          console.log(response)
        }).catch(e => {
          // 打印一下错误
          console.log(e)
        })
    },
    tests () {
      this.axios.get('http://localhost:8080/static/a.json', {})
        .then((response) => {
          // 响应成功回调
          console.log(response)
        }).catch(e => {
          // 打印一下错误
          console.log(e)
        })
    }
  }
}
</script>

<style>

a {
  color : turquoise
}

</style>