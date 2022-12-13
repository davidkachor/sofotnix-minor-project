<template>
  <MainContentLayout>
    <div class="p-medium bg-white rounded-[20px]">
      <nav class="flex gap-normal items-center">
        <BackToMain title="Breeds" />

        <el-select size="large" placeholder="All breeds" class="!rounded-[10px]">
          <el-option v-for="{label, value} of options" :key="value" :value="value" :label="label" />
        </el-select>

        <el-select v-model="limit" size="large" placeholder="All breeds" class="!rounded-[10px]">
          <el-option v-for="{label, value} of limitOptions" :key="value" :value="value" :label="label" />
        </el-select>

        <el-button class="sort-button">
          <AlphabetAscendingIcon />
        </el-button>

        <el-button class="sort-button">
          <AlphabetDescendingIcon />
        </el-button>
      </nav>

      <GridContentlayout class="mt-medium gap-medium" :data="gridMaker">
        <template #default="{item}">
          <BreedLink :id="+item.value" :key="item.value" :name="item.name" :src="item.img" />
        </template>
      </GridContentlayout>
    </div>
  </MainContentLayout>
</template>

<script setup lang="ts">
import MainContentLayout from '@/layouts/MainContentLayout.vue'
import GridContentlayout from '@/layouts/GridContentLayout.vue'

import { breeds } from '@/__homework/breeds'

const limit = ref('10')

const gridMaker = computed(() => {
  return breeds.slice(0, 15).map(el => ({ value: el.id, img: el.image.url, name: el.name }))
})

const limitOptions: {label: string; value: string}[] = [
  {
    value: '5',
    label: 'Limit: 5'
  },
  {
    value: '10',
    label: 'Limit: 10'
  },
  {
    value: '15',
    label: 'Limit: 15'
  },
  {
    value: '20',
    label: 'Limit: 20'
  }
]

const options: {label: string; value: string}[] = [
  {
    label: '123123',
    value: '123123'
  },
  {
    label: '321321',
    value: '321321'
  },
  {
    label: '456456',
    value: '456456'
  }
]
</script>

<style scoped lang="scss">
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
</style>
