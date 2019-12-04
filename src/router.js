//import firebase from 'firebase'
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Graphics from './views/Graphics.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/graphics",
      name: "Graphics",
      component: Graphics
    }
  ],
  // mode: "history",
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // }
});
