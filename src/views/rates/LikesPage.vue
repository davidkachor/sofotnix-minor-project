<template>
  <RateLayout :data="likes" type="Likes" @remove-rate="removeLike" />
</template>

<script setup lang="ts">
import RateLayout from './layouts/RateLayout.vue'

const ratingsStore = useRatingsStore()
const { likes } = storeToRefs(ratingsStore)
const { removeLike } = ratingsStore
</script>
