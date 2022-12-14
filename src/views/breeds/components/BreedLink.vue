<template>
  <router-link
    :to="{ name: $routeNames.breedItem, params: { id } }"
    class="link-item"
    @mouseover="showName = true"
    @mouseleave="showName = false"
  >
    <el-image
      fit="cover"
      class="h-full w-full"
      :src="src"
      :alt="id"
    >
      <template #error>
        <div class="w-full h-full flex flex-col items-center justify-center">
          <ImagePlaceholderIcon class="w-[50px] h-[50px]" />
        </div>
      </template>
    </el-image>

    <div v-show="showName" class="bg-[#FF868E99] z-10 w-full h-full flex p-normal absolute items-end">
      <p class="rounded-[10px] text-center w-full bg-white text-main py-[5px]">{{ name }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  id: number
  name: string
}>()

const showName = ref(false)
</script>

<style scoped lang="scss">
.link-item {
  @apply h-full w-full flex justify-center bg-[#e4e4e4] relative min-h-[100px];
  border-radius: 20px !important;
  overflow: hidden;
}
</style>
