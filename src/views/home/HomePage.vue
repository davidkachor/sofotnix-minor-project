<template>
  <div class="block h-full bg-common rounded-[20px] relative">
    <div class="absolute top-[-92px] calculated right-[-30px]">
      <img
        class="w-full"
        inert
        src="../../assets/main/dog-and-girl.png"
        alt="dog and girl"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden'
})
onUnmounted(() => {
  (document.querySelector('body') as HTMLBodyElement).style.overflow = 'auto'
})
</script>

<style lang="scss" scoped>
.calculated {
  width: calc(100% + 95px)
}
</style>
