<template>
  <div class="grid-layout">
    <slot v-for="item in data" :key="item.value" name="grid-item" :item="item">
      <p>{{ item.value }}</p>
    </slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: IGridItem[]
}>()
</script>

<style scoped lang="scss">
.grid-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

</style>
