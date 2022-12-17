import { shuffle } from 'lodash'

import { breeds } from '@/__homework/breeds'
import { searchMatch } from '@/helpers'

export const useBreedsStore = defineStore('breeds', () => {
  const breedsState = shallowRef<IBreed[]>(breeds)

  const queryParams = ref<IQueryParams>({
    limit: 10,
    filterByName: [],
    sort: 'none'
  })

  const showAmount = ref(queryParams.value.limit)

  const filteredBreeds = computed<IBreed[]>(() => {
    let array = [...breedsState.value]

    if (queryParams.value.sort === 'asc') array.sort((a, b) => a.name.localeCompare(b.name))
    else if (queryParams.value.sort === 'dsc') array.sort((a, b) => b.name.localeCompare(a.name))
    else array = shuffle(array)

    return array.filter(el => {
      return queryParams.value.filterByName.length === 0 || queryParams.value.filterByName.includes(el.name)
    })
  })

  const limitedBreeds = computed<IBreed[]>(() => {
    return filteredBreeds.value.slice(0, showAmount.value)
  })

  const canShowMore = computed(() => {
    return filteredBreeds.value.length > showAmount.value
  })

  function breedsBySearch (search: string | string[]) {
    return breedsState.value.filter(el => searchMatch(el.name, search))
  }

  function showMore () {
    showAmount.value = showAmount.value + queryParams.value.limit
  }

  function resetQueryParams () {
    queryParams.value = {
      limit: 10,
      filterByName: [],
      sort: 'none'
    }
  }

  watch(() => queryParams.value.limit, (newValue) => {
    showAmount.value = newValue
  })

  return {
    queryParams,
    filteredBreeds: limitedBreeds,
    showMore,
    allBreeds: breedsState,
    canShowMore,
    breedsBySearch,
    resetQueryParams
  }
})
