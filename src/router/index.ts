import { createRouter, createWebHistory } from 'vue-router'

import { routeGuard } from './route-guard'
import { routes } from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact',
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

router.beforeEach(routeGuard)
