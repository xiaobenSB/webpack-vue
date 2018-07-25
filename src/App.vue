<template>
<div id="app">
  <Carousel></Carousel>
  <headerBar></headerBar>
  <img src="./assets/logo.png">
  <router-view/>
</div>
</template>

<script>
import Carousel from './components/Carousel'
import headerBar from './components/headerBar.vue'
import left from './components/left.vue'

export default {
  name: 'app',
  components: {
    Carousel: Carousel,
    headerBar: headerBar,
    left: left
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
