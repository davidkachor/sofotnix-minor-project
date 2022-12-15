import { v4 } from 'uuid'

export const useRatingsStore = defineStore('ratings', () => {
  const likesStore = ref<IBreed[]>([])
  const dislikesStore = ref<IBreed[]>([])
  const favouritesStore = ref<IBreed[]>([])
  const historyStore = ref<IActionLog[]>([])

  function addLike (item: IBreed) {
    if (!item) return
    likesStore.value.unshift(item)

    addToHistory({
      type: 'Likes',
      imageId: item.image.id
    })
  }

  function removeLike (item: IBreed) {
    const index = likesStore.value.indexOf(item)
    if (index === -1) return

    likesStore.value.splice(index, 1)

    addToHistory({
      type: 'Likes',
      imageId: item.image.id,
      remove: true
    })
  }

  function addDislike (item: IBreed) {
    if (!item) return
    dislikesStore.value.unshift(item)

    addToHistory({
      type: 'Dislikes',
      imageId: item.image.id
    })
  }

  function removeDislike (item: IBreed) {
    const index = dislikesStore.value.indexOf(item)
    if (index === -1) return

    dislikesStore.value.splice(index, 1)

    addToHistory({
      type: 'Dislikes',
      imageId: item.image.id,
      remove: true
    })
  }

  function addFavourite (item: IBreed) {
    if (!item) return
    favouritesStore.value.unshift(item)

    addToHistory({
      type: 'Favourites',
      imageId: item.image.id
    })
  }

  function removeFavourite (item: IBreed) {
    const index = favouritesStore.value.indexOf(item)
    if (index === -1) return

    favouritesStore.value.splice(index, 1)

    addToHistory({
      type: 'Favourites',
      imageId: item.image.id,
      remove: true
    })
  }

  function addToHistory (log: Omit<IActionLog, 'time' | 'id'>) {
    const date = new Date()

    const id = v4()

    historyStore.value.unshift({
      id,
      time: {
        hour: date.getHours(),
        minutes: date.getMinutes()
      },
      ...log
    })
  }

  return {
    likes: likesStore,
    dislikes: dislikesStore,
    favourites: favouritesStore,
    addLike,
    removeLike,
    addDislike,
    removeDislike,
    addFavourite,
    removeFavourite,
    history: historyStore
  }
})
