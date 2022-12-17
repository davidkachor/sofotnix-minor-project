import { shuffle } from 'lodash'

export const useGetRandomUnratedBreed = () => {
  const likesStore = useRatingsStore()
  const { allBreeds } = storeToRefs(useBreedsStore())
  const { dislikes, favourites, likes } = storeToRefs(likesStore)

  const shuffledBreeds = computed(() => shuffle([...allBreeds.value]))

  const data = computed<IBreed | null>(() => {
    for (const item of shuffledBreeds.value) {
      if (!dislikes.value[item.id] && !favourites.value[item.id] && !likes.value[item.id]) {
        return item
      }
    }
    return null
  })

  return data
}
