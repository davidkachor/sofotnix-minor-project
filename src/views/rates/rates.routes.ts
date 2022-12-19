import type { RouteRecordRaw } from 'vue-router'

import LikesPage from './LikesPage.vue'
import FavoritesPage from './FavoritesPage.vue'
import DislikesPage from './DislikesPage.vue'

export const ratesRouteNames = {
  likes: 'likes',
  favorites: 'favorites',
  dislikes: 'dislikes'
}

export const ratesRoutes: RouteRecordRaw[] = [
  {
    path: '/likes',
    name: ratesRouteNames.likes,
    component: LikesPage
  },
  {
    path: '/dislikes',
    name: ratesRouteNames.dislikes,
    component: DislikesPage
  },
  {
    path: '/favourites',
    name: ratesRouteNames.favorites,
    component: FavoritesPage
  }
]
