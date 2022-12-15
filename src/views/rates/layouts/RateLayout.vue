<template>
  <MainContentLayout>
    <div class="p-medium rounded-[20px] bg-white flex flex-col gap-medium">
      <PageTabs :tab-list="[{ name: pageName || type }]" />

      <p v-if="data.length === 0" class="py-[18px] px-5 rounded-[10px] bg-layout text-pale">
        No item found
      </p>

      <GridContentLayout v-else :data="gridData" class="gap-medium">
        <template #grid-item="{ item }">
          <BreedRateItem :src="item.src" :name="item.name" :type="type" @remove-rate="$emit('remove-rate', item.ref)" />
        </template>
      </GridContentLayout>

      <div class="flex flex-col gap-normal">
        <ActionLog v-for="item in actionLogs" :key="item.id" :item="item" />
      </div>
    </div>
  </MainContentLayout>
</template>

<script setup lang="ts">
import MainContentLayout from '@/layouts/MainContentLayout.vue'
import GridContentLayout from '@/layouts/GridContentLayout.vue'

const props = defineProps<{
  type: TRateType
  pageName?: string
  data: IBreed[]
}>()

defineEmits<{
  (t: 'remove-rate', item: IBreed): void
}>()

const { history } = storeToRefs(useRatingsStore())

const gridData = computed<IRatesItemData[]>(() => {
  return props.data.map(el => ({ ref: el, value: el.id, name: el.name, src: el.image.url }))
})

const actionLogs = computed<IActionLog[]>(() => {
  return history.value.filter(log => log.type === props.type && log.remove)
})

</script>
