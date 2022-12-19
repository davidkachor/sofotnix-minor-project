import { v4 } from 'uuid'

export const useRatingsStore = defineStore('ratings', () => {
  const likesStore = useLocalStorage('rating/likes', {} as TRating)
  const dislikesStore = useLocalStorage('rating/dislikes', {} as TRating)
  const favouritesStore = useLocalStorage('rating/favorites', {} as TRating)
  const historyStore = useLocalStorage('action logs history', [] as IActionLog[])

  function addLike (item: IBreed) {
    likesStore.value[item.id] = item

    addToHistory({
      type: 'Likes',
      imageId: item.image.id
    })
  }

  function removeLike (item: IBreed) {
    delete likesStore.value[item.id]

    addToHistory({
      type: 'Likes',
      imageId: item.image.id,
      remove: true
    })
  }

  function addDislike (item: IBreed) {
    dislikesStore.value[item.id] = item

    addToHistory({
      type: 'Dislikes',
      imageId: item.image.id
    })
  }

  function removeDislike (item: IBreed) {
    delete dislikesStore.value[item.id]

    addToHistory({
      type: 'Dislikes',
      imageId: item.image.id,
      remove: true
    })
  }

  function addFavourite (item: IBreed) {
    favouritesStore.value[item.id] = item

    addToHistory({
      type: 'Favourites',
      imageId: item.image.id
    })
  }

  function removeFavourite (item: IBreed) {
    delete favouritesStore.value[item.id]

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
