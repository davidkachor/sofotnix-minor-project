<template>
  <div class="relative">
    <el-image :src="url" :alt="name || 'item'" class="min-h-[200px] w-full rounded-[20px]">
      <template #error>
        <div class="w-full h-full flex items-center justify-center bg-gray-200 p-[60px]">
          <ImagePlaceholderIcon class="w-10 h-10" />
        </div>
      </template>
    </el-image>

    <h2
      class="absolute left-[50%] translate-x-[-50%] bottom-[-20px] shadow-xl bg-white
          font-medium text-contrast text-4xl leading-[52px] px-10 py-[5px] text-center rounded-[20px]"
    >
      {{ name }}
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  url?: string
  name?: string
}>()
</script>
