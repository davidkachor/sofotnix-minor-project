export interface IBreedSize {
  imperial: string
  metric: string
}

export interface IBreedImage {
  id: string
  width: number
  height: number
  url: string
}

export interface IBreed {
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
