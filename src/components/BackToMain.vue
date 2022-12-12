<template>
  <div class="flex flex-row gap-normal">
    <router-link
      :to="{ name: $routeNames.home }"
      class="bg-common w-[40px] h-[40px] rounded-[10px] flex items-center justify-center"
    >
      <ArrowIcon class="fill-main" />
    </router-link>
    <h2
      class="bg-main h-[40px] px-[30px] py-[5px] rounded-[10px]
      font-medium text-medium leading-[30px] uppercase text-white tracking-[2px]"
    >
      {{ title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
