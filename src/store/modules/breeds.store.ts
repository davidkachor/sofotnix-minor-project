import { breeds } from '@/__homework/breeds'

export const useBreedsStore = defineStore('breeds', () => {
  const breedsState = shallowRef<IBreed[]>(breeds)

  const queryParams = ref<IQueryParams>({
    limit: 10,
    filterByName: [],
    sort: 'none'
  })

  const showAmount = ref(queryParams.value.limit)

  const filteredBreeds = computed<IBreed[]>(() => {
    console.log('toggle filter')
    const array = [...breedsState.value]

    if (queryParams.value.sort === 'asc') array.sort((a, b) => a.name.localeCompare(b.name))
    else if (queryParams.value.sort === 'dsc') array.sort((a, b) => b.name.localeCompare(a.name))

    return array.filter(el => {
      return queryParams.value.filterByName.length === 0 || queryParams.value.filterByName.includes(el.name)
    })
  })

  const limitedBreeds = computed<IBreed[]>(() => {
    console.log('toggle limited')
    return filteredBreeds.value.slice(0, showAmount.value)
  })

  const canShowMore = computed(() => {
    return filteredBreeds.value.length > showAmount.value
  })

  function showMore () {
    showAmount.value = showAmount.value + queryParams.value.limit
  }

  watch(() => queryParams.value.limit, (newValue) => {
    showAmount.value = newValue
  })

  return { queryParams, filteredBreeds: limitedBreeds, showMore, allBreeds: breedsState, canShowMore }
})
