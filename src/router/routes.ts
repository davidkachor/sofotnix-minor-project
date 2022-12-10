import type { RouteRecordRaw } from 'vue-router'

import { homeRoutes } from '@/views/home/home.routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  ...homeRoutes
]

export {
  routes
}
