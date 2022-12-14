export const useGetRandomBreed = () => {
  const likesStore = useRatingsStore()
  const { allBreeds } = storeToRefs(useBreedsStore())
  const { dislikes, favourites, likes } = storeToRefs(likesStore)

  const pending = ref(false)

  function getRandomArbitrary (min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const item = computed(() => {
    while (true) {
      pending.value = true
      const randomIndex = getRandomArbitrary(0, allBreeds.value.length)

      if (!dislikes.value.includes(allBreeds.value[randomIndex]) &&
      !likes.value.includes(allBreeds.value[randomIndex]) &&
      !favourites.value.includes(allBreeds.value[randomIndex])) {
        pending.value = false
        return allBreeds.value[randomIndex]
      }
    }
  })

  return item
}
