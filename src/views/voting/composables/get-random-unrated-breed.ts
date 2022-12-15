export const useGetRandomUnratedBreed = () => {
  const likesStore = useRatingsStore()
  const { allBreeds } = storeToRefs(useBreedsStore())
  const { dislikes, favourites, likes } = storeToRefs(likesStore)

  const hashedRatingStore = computed<Record<number, IBreed>>(() => {
    return [...dislikes.value, ...favourites.value, ...likes.value]
      .reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {} as Record<number, IBreed>)
  })

  const data = computed<IBreed | null>(() => {
    for (const item of allBreeds.value) {
      if (!hashedRatingStore.value[item.id]) {
        return item
      }
    }
    return null
  })

  return data
}
