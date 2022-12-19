<template>
  <Teleport to="#modal-root">
    <div
      ref="layout"
      :class="$attrs.class"
      class="fixed top-0 left-0 w-full h-full bg-modal-layout z-50"
      @click.self="onClose"
    >
      <slot />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])

const layout = ref<HTMLDivElement | null>(null)

function onClose () {
  // (document.querySelector('body') as HTMLBodyElement).inert = false
  emit('close')
}

// onMounted(() => {
//   (document.querySelector('body') as HTMLBodyElement).inert = true
//   if (!layout.value) return
//   layout.value.inert = false
// })
</script>
