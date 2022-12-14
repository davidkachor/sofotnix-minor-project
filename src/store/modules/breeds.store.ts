import { breeds } from '@/__homework/breeds'

export const useBreedsStore = defineStore('breeds', () => {
  const breedsState = shallowRef(breeds)

  const breedsHashed = computed<TBreedHashed>(() => {
    const hashed = breedsState.value.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {} as TBreedHashed)

    return hashed
  })

  return { allBreeds: breedsHashed }
})
