<template>
  <div class="container" id="app">
   <h1>Routing Demo</h1>
   <hr>
    <app-header></app-header>
   <hr>
   <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    appHeader:header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
