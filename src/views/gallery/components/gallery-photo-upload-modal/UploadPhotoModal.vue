<template>
  <ModalLayout class="flex justify-end p-[30px]" @close="$emit('close')">
    <aside class="bg-layout flex flex-col gap-10 items-center w-[50%] p-medium rounded-[20px]">
      <el-button
        class="self-end w-10 h-10 rounded-[10px] border-none fill-main hover:fill-white hover:bg-main "
        @click="$emit('close')"
      >
        <CloseIcon class="w-4" />
      </el-button>

      <div class="flex flex-col gap-normal">
        <h2 class="font-medium text-4xl leading-[52px] text-contrast text-center">Upload a .jpg or .png Dog Image</h2>
        <p
          class="text-pale text-xl text-center"
        >
          Any uploads must comply with the
          <span class="text-main">upload guidelines</span>
          or face deletion.
        </p>
      </div>

      <UploadInput />
    </aside>
  </ModalLayout>
</template>

<script setup lang="ts">
import ModalLayout from '@/layouts/ModalLayout.vue'

defineEmits(['close'])
</script>
