import { homeRouteNames } from '@/views/home/home.routes'
import { votingRouteNames } from '@/views/voting/voting.routes'
import { breedsRouteNames } from '@/views/breeds/breeds.routes'
import { ratesRouteNames } from '@/views/rates/rates.routes'
import { searchRouteNames } from '@/views/search/search.routes'
import { galleryRouteNames } from '@/views/gallery/gallery.routes'

export const routeNames = {
  ...homeRouteNames,
  ...votingRouteNames,
  ...breedsRouteNames,
  ...ratesRouteNames,
  ...searchRouteNames,
  ...galleryRouteNames
}
