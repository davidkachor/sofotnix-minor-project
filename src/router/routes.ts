import type { RouteRecordRaw } from 'vue-router'

import { homeRoutes, homeRouteNames } from '@/views/home/home.routes'
import { votingRoutes } from '@/views/voting/voting.routes'
import { breedsRoutes } from '@/views/breeds/breeds.routes'
import { ratesRoutes } from '@/views/rates/rates.routes'
import { searchRoutes } from '@/views/search/search.routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  ...homeRoutes,
  ...votingRoutes,
  ...breedsRoutes,
  ...ratesRoutes,
  ...searchRoutes,

  {
    path: '/*',
    redirect: { name: homeRouteNames.home }
  }
]

export {
  routes
}
