<template>
  <RateLayout :data="favourites" type="Favourites" @remove-rate="removeFavourite" />
</template>

<script setup lang="ts">
import RateLayout from './layouts/RateLayout.vue'

const ratingsStore = useRatingsStore()
const { favourites } = storeToRefs(ratingsStore)
const { removeFavourite } = ratingsStore
</script>
