import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/demo2",
      name: "测试",
      component: () => import("@/pages/demo2/views/demo.vue"),
    },
  ]
})

export default router
