import type { RouteRecordRaw } from 'vue-router'
import Home from './Home.vue'

export const homeRouteNames = {
  home: 'home'
}

export const homeRoutes: RouteRecordRaw[] = [
  {
    name: homeRouteNames.home,
    path: '/',
    component: Home
  }
]
