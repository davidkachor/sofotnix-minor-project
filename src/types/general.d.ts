type TIndexedObject<T = any> = {
  [key: string]: T
}

type TCallbackFn<T extends unknown[] = [], R = void> = (...args: T) => R

interface IBreedSize {
  imperial: string
  metric: string
}

interface IBreedImage {
  id: string
  width: number
  height: number
  url: string
}

interface IBreed {
  id: number
  weight: IBreedSize
  height: IBreedSize
  name: string
  life_span: string
  reference_image_id: string
  image: IBreedImage
  description?: string
  history?: string
  origin?: string
  breed_group?: string
  country_code?: string
  bred_for?: string
  temperament?: string
}

type TBreedHashed = Record<string, IBreed>

type TFavoriteType = 'Likes' | 'Favourites' | 'Dislikes'

interface IQueryParams {
  sort: 'dsc' | 'asc' | 'none'
  filterByName: string[]
  limit: number
}
