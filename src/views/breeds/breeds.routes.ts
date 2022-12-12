import type { RouteRecordRaw } from 'vue-router'

import Breeds from './Breeds.vue'
import BreedItem from './BreedItem.vue'

export const breedsRouteNames = {
  breeds: 'breeds',
  breedItem: 'breedItem'
}

export const breedsRoutes: RouteRecordRaw[] = [
  {
    path: '/breeds',
    name: breedsRouteNames.breeds,
    component: Breeds
  },
  {
    path: '/breeds/:id',
    name: breedsRouteNames.breedItem,
    component: BreedItem
  }
]
