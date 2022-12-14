export const useRatingsStore = defineStore('likes', () => {
  const likesStore = ref<IBreed[]>([])
  const dislikesStore = ref<IBreed[]>([])
  const favouritesStore = ref<IBreed[]>([])
  const historyStore = ref<IActionLog[]>([])

  function addLike (item: IBreed) {
    likesStore.value.unshift(item)
    addToHistory({
      type: 'Likes',
      imageId: item.image.id
    })
  }

  function removeLike (item: IBreed) {
    const index = likesStore.value.indexOf(item)
    likesStore.value.splice(index, 0)
    addToHistory({
      type: 'Likes',
      imageId: item.image.id,
      remove: true
    })
  }

  function addDislike (item: IBreed) {
    dislikesStore.value.unshift(item)
    addToHistory({
      type: 'Dislikes',
      imageId: item.image.id
    })
  }

  function removeDislike (item: IBreed) {
    const index = dislikesStore.value.indexOf(item)
    dislikesStore.value.splice(index, 0)
    addToHistory({
      type: 'Dislikes',
      imageId: item.image.id,
      remove: true
    })
  }

  function addFavourite (item: IBreed) {
    favouritesStore.value.unshift(item)
    addToHistory({
      type: 'Favourites',
      imageId: item.image.id
    })
  }

  function removeFavourite (item: IBreed) {
    const index = favouritesStore.value.indexOf(item)
    favouritesStore.value.splice(index, 0)
    addToHistory({
      type: 'Favourites',
      imageId: item.image.id,
      remove: true
    })
  }

  function addToHistory (log: Omit<IActionLog, 'time'>) {
    const date = new Date()
    historyStore.value.unshift({
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
