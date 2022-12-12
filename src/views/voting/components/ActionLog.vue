<template>
  <article class="bg-layout flex gap-normal p-[15px] rounded-[10px] items-center">
    <span class="px-normal py-[3px] rounded-[5px] bg-white">{{ formattedTime }}</span>

    <p class="text-pale">Image ID: <span class="font-medium text-contrast">{{ item.imageId }}</span> {{ message }}</p>

    <SmilePositiveIcon v-if="item.type === 'Favourites'" class="fill-green-shade ml-auto" />
    <SmileNegativeIcon v-else-if="item.type === 'Dislikes'" class="fill-yellow-shade ml-auto" />
    <HeartEmptyIcon v-else class="fill-main ml-auto" />
  </article>
</template>

<script setup lang="ts">

const props = defineProps<{
  item: IActionLog
}>()

const formattedTime = computed(() => {
  const { hour, minutes } = props.item.time
  return `${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}`
})

const message = computed(() => {
  return `${props.item.remove ? 'was removed from' : 'was added to'} ${props.item.type}`
})
</script>
