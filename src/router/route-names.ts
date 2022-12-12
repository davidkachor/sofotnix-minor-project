import { homeRouteNames } from '@/views/home/home.routes'
import { votingRouteNames } from '@/views/voting/voting.routes'
import { breedsRouteNames } from '@/views/breeds/breeds.routes'

export const routeNames = {
  ...homeRouteNames,
  ...votingRouteNames,
  ...breedsRouteNames
}
