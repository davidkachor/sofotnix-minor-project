<template>
  <MainContentLayout>
    <div class="p-medium rounded-[20px] bg-white flex flex-col gap-medium">
      <PageTabs :tab-list="[{ name: pageName || type }]" />

      <p v-if="isEmpty" class="py-[18px] px-5 rounded-[10px] bg-layout text-pale">
        No item found
      </p>

      <GridContentLayout v-else :data="gridData" class="gap-medium">
        <template #grid-item="{ item }">
          <BreedRateItem
            :src="item.src"
            :name="item.name"
            :type="type"
            @remove-rate="$emit('remove-rate', item.ref as IBreed)"
          />
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
  data: TRating
}>()

defineEmits<{
  (t: 'remove-rate', item: IBreed): void
}>()

const { history } = storeToRefs(useRatingsStore())

const gridData = computed(() => {
  const refactored: IRatesItemData[] = []

  for (const key in props.data) {
    const { id, name, image } = props.data[key]
    refactored.push({ ref: props.data[key], value: id, name, src: image.url })
  }

  return refactored
})

const isEmpty = computed(() => Object.keys(props.data).length === 0)

const actionLogs = computed<IActionLog[]>(() => {
  return history.value.filter(log => log.type === props.type && log.remove)
})

</script>
