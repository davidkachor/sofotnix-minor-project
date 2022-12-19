<template>
  <RateLayout :data="dislikes" type="Dislikes" @remove-rate="removeDislike" />
</template>

<script setup lang="ts">
import RateLayout from './layouts/RateLayout.vue'

const ratingsStore = useRatingsStore()
const { dislikes } = storeToRefs(ratingsStore)
const { removeDislike } = ratingsStore
</script>
