import type { RouteRecordRaw } from 'vue-router'

import BreedsPage from './BreedsPage.vue'
import BreedItemPage from './BreedItemPage.vue'

export const breedsRouteNames = {
  breeds: 'breeds',
  breedItem: 'breedItem'
}

export const breedsRoutes: RouteRecordRaw[] = [
  {
    path: '/breeds',
    name: breedsRouteNames.breeds,
    component: BreedsPage
  },
  {
    path: '/breeds/:id',
    name: breedsRouteNames.breedItem,
    component: BreedItemPage,
    props: true
  }
]
