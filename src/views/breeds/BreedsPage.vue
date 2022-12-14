<template>
  <MainContentLayout>
    <div class="p-medium bg-white rounded-[20px]">
      <nav class="flex gap-normal items-center">
        <PageTabs :tab-list="[{name: 'Breeds'}]" />

        <el-select
          v-model="queryParams.filterByName"
          multiple
          size="large" collapse-tags mutiple placeholder="All breeds" class="w-[226px]"
        >
          <el-option v-for="{label, value} of nameOptions" :key="value" :value="value" :label="label" />
        </el-select>

        <el-select v-model="queryParams.limit" size="large" placeholder="All breeds" class="!rounded-[10px]">
          <el-option v-for="{label, value} of limitOptions" :key="value" :value="value" :label="label" />
        </el-select>

        <el-button class="sort-button" @click="queryParams.sort = 'dsc'">
          <AlphabetAscendingIcon />
        </el-button>

        <el-button class="sort-button" @click="queryParams.sort = 'asc'">
          <AlphabetDescendingIcon />
        </el-button>
      </nav>

      <GridContentlayout class="mt-medium gap-medium" :data="gridData">
        <template #grid-item="{item}">
          <BreedLinkItem :id="+item.value" :key="item.value" :name="item.name" :src="item.img" />
        </template>
      </GridContentlayout>

      <el-button
        v-if="canShowMore"
        type="primary"
        class="show-more-button"
        @click="showMore"
      >
        Show more
      </el-button>
    </div>
  </MainContentLayout>
</template>

<script setup lang="ts">
import MainContentLayout from '@/layouts/MainContentLayout.vue'
import GridContentlayout from '@/layouts/GridContentLayout.vue'
import { useBreedsStore } from '@/store/modules/breeds.store'

const breedsStore = useBreedsStore()
const { filteredBreeds, queryParams, allBreeds, canShowMore } = storeToRefs(breedsStore)
const { showMore, resetQueryParams } = breedsStore

const gridData = computed(() => {
  return filteredBreeds.value.map(el => ({ value: el.id, img: el.image.url, name: el.name }))
})

onMounted(() => resetQueryParams())

const limitOptions: {label: string; value: string | number}[] = [
  {
    value: 5,
    label: 'Limit: 5'
  },
  {
    value: 10,
    label: 'Limit: 10'
  },
  {
    value: 15,
    label: 'Limit: 15'
  },
  {
    value: 20,
    label: 'Limit: 20'
  }
]

const nameOptions = computed<{label: string; value: string | number}[]>(() => {
  return Object.values(allBreeds.value).map(el => ({ label: el.name, value: el.name }))
})
</script>

<style scoped lang="scss">
:global(.el-select-dropdown) {
  overflow: auto
}
.sort-button {
  @apply border-layout bg-layout rounded-[10px] w-10 h-10;
  svg {
    @apply fill-[#8C8C8C];
  }

  &:focus, &:hover {
    @apply border-common;

    svg {
      @apply fill-main;
    }
  }
}
.show-more-button {
 @apply mt-medium w-full rounded-[10px] py-medium border-main;
 button {
  @apply  bg-common text-main hover:bg-main hover:text-white;
 }
}
</style>
