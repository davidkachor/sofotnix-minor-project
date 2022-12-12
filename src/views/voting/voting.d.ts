interface IActionLog {
  time: {
    minutes: number
    hour: number
  }
  imageId: string
  type: TFavoriteType
  remove?: boolean
}
