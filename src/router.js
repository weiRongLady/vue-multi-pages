import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/test",
      name: "test",
      component: () => import("@/views/test.vue"),
    },
  ]
})

export default router
