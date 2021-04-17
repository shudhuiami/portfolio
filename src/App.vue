<template>
  <div id="app">
    <SIDENAV></SIDENAV>
    <vue-page-transition name="fade-in-right">
      <router-view></router-view>
    </vue-page-transition>
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
