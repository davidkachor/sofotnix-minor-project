<template>
  <div
    class="breed-item"
    @mouseover="showName = true"
    @mouseleave="showName = false"
  >
    <el-image :src="src" :alt="name" fit="cover" class="w-full">
      <template #error>
        <div class="w-full h-full flex flex-col items-center justify-center">
          <ImagePlaceholderIcon class="w-[50px] h-[50px]" />
        </div>
      </template>
    </el-image>

    <div
      v-show="showName"
      class="bg-[#FF868E99] z-10 w-full h-full flex p-normal absolute items-center justify-center"
    >
      <el-button
        class="w-10 h-10 rounded-[10px] fill-main bg-white flex items-center justify-center"
        @click="$emit('remove-rate')"
      >
        <HeartFilledIcon v-if="type === 'Favourites'" class="w-5" />
        <SmilePositiveIcon v-else-if="type === 'Likes'" class="w-5" />
        <SmileNegativeIcon v-else class="w-5" />
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: TRateType
  src: string
  name: string
}>()

defineEmits(['remove-rate'])

const showName = ref(false)
</script>

<style scoped lang="scss">
  .breed-item {
    @apply h-full w-full flex justify-center bg-[#e4e4e4] relative min-h-[100px];
    border-radius: 20px !important;
    overflow: hidden;
  }
</style>
