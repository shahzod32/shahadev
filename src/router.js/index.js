import { createRouter, createWebHistory } from 'vue-router'

import Ovqatlar from '@/companents/Ovqat.vue'
import Ichimliklar from '@/companents/ichimliklar.vue'
import Shirinliklar from '@/companents/shirinliklar.vue'
import Pizza from '@/companents/pizza.vue'


const routes = [
  { path: '/', redirect: '/ovqatlar' }, 
  { path: '/ovqatlar', component: Ovqatlar, props: true },
  { path: '/ichimliklar', component: Ichimliklar, props: true },
  { path: '/shirinliklar', component: Shirinliklar, props: true },
  { path: '/pizza', component: Pizza, props: true }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
