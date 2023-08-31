import {createRouter, createWebHistory} from "vue-router";

const routes = <any>[
  {redirect:'/', path:'/home'},
  {path:'/', name:'Home', component:()=>import('@/views/home/index.vue')},
  {path:'/mine', name:'Mine', component:()=>import('@/views/mine/index.vue')}
]

const router = createRouter({
  routes,
  history:createWebHistory(import.meta.env.VITE_APP_PATH),
})

export default router