interface IActionLog {
  id: string
  time: {
    minutes: number
    hour: number
  }
  imageId: string
  type: TRateType
  remove?: boolean
}
