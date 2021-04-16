<template>
  <div id="app">
    <SIDENAV></SIDENAV>
    <router-view></router-view>
  </div>
</template>

<script>
import SIDENAV  from './components/global/side_nav'

export default {
  name: 'App',
  components:{SIDENAV}
}
</script>

<style>
@import "./assets/styles/main.min.css";
</style>
