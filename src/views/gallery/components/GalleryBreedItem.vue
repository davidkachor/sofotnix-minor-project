<template>
  <div
    class="breed-item"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <el-image :src="src" :alt="name" fit="cover" class="w-full">
      <template #error>
        <div class="w-full h-full flex flex-col items-center justify-center">
          <ImagePlaceholderIcon class="w-[50px] h-[50px]" />
        </div>
      </template>
    </el-image>

    <div
      v-show="isHovered"
      class="bg-[#FF868E99] z-10 w-full h-full flex p-normal absolute items-center justify-center"
    >
      <el-button
        class="w-10 h-10 rounded-[10px] fill-main bg-white flex items-center justify-center"
        @click="onClick"
      >
        <HeartFilledIcon v-if="isFavorite" class="w-5" />
        <HeartEmptyIcon v-else class="w-5" />
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
  name: string
  breedItem: IBreed
}>()

const ratingsStore = useRatingsStore()
const { favourites } = storeToRefs(ratingsStore)
const { addFavourite, removeFavourite } = ratingsStore

const isHovered = ref(false)

const isFavorite = computed(() => {
  return favourites.value.includes(props.breedItem)
})

function onClick () {
  if (isFavorite.value) {
    removeFavourite(props.breedItem)
  } else {
    addFavourite(props.breedItem)
  }
}
</script>

<style scoped lang="scss">
  .breed-item {
    @apply h-full w-full flex justify-center bg-[#e4e4e4] relative min-h-[100px];
    border-radius: 20px !important;
    overflow: hidden;
  }
</style>
