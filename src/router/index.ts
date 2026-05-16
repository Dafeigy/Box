import { createRouter, createMemoryHistory } from 'vue-router'

// 定义路由组件
const PtolemaeusPage = () => import('@/pages/stargazer/index.vue')

const routes = [
  {
    path: '/',
    component: PtolemaeusPage,
    name: 'ptolemaeus'
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router