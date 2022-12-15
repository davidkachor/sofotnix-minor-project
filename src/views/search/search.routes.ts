import type { RouteRecordRaw } from 'vue-router'

import SearchPage from './SearchPage.vue'

export const searchRouteNames = {
  search: 'search'
}

export const searchRoutes: RouteRecordRaw[] = [
  {
    path: '/search',
    name: searchRouteNames.search,
    component: SearchPage
  }
]
