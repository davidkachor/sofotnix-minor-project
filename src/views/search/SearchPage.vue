<template>
  <MainContentLayout>
    <div class="bg-white p-medium rounded-[20px] flex flex-col gap-medium">
      <PageTabs :tab-list="[{ name: 'search' }]" />

      <p class="text-[20px] text-pale leading-[29px]">
        Search results for:
        <strong class="text-contrast font-medium">{{ search }}</strong>
      </p>

      <GridContentLayout :data="gridData" class="gap-medium">
        <template #grid-item="{ item }">
          <BreedLinkItem :id="item.value" :name="item.name" :src="item.src" />
        </template>
      </GridContentLayout>
    </div>
  </MainContentLayout>
</template>

<script setup lang="ts">
import MainContentLayout from '@/layouts/MainContentLayout.vue'
import GridContentLayout from '@/layouts/GridContentLayout.vue'
import { useRouteQuery } from '@vueuse/router'

const { breedsBySearch } = useBreedsStore()
const search = useRouteQuery('s', '')

const gridData = computed<IGridItem[]>(() => {
  return breedsBySearch(search.value).map(el => ({ value: el.id, name: el.name, src: el.image.url }))
})
</script>
