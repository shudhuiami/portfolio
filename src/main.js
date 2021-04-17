import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router/index'
import VuePageTransition from 'vue-page-transition'
import 'bootstrap'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VuePageTransition)

global.core = {
  APP_PATH: 'http://localhost/portfolio/static/images',
};

const router = new VueRouter({
  routes:routes,
  mode :'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
