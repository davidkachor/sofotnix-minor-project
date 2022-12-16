import type { RouteRecordRaw } from 'vue-router'

import GalleryPage from './GalleryPage.vue'

export const galleryRouteNames = {
  gallery: 'gallery'
}

export const galleryRoutes: RouteRecordRaw[] = [
  {
    path: '/gallery',
    name: galleryRouteNames.gallery,
    component: GalleryPage
  }
]
