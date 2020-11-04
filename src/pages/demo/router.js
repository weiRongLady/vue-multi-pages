import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/demo",
      name: "测试",
      component: () => import("@/pages/demo/views/demo.vue"),
    },
  ]
})

export default router
