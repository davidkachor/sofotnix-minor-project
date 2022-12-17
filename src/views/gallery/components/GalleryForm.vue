<template>
  <form
    class="grid grid-cols-2 grid-rows-2 bg-layout rounded-[20px] pt-normal px-medium pb-medium
    gap-x-medium gap-y-normal"
  >
    <div>
      <p class="select-caption">ORDER</p>
      <el-select v-model="valueParams.sort" class="select">
        <el-option v-for="{ label, value } in orderOptions" :key="value" :value="value" :label="label" />
      </el-select>
    </div>

    <div>
      <p class="select-caption">TYPE</p>
      <el-select v-model="typeValue" class="select">
        <el-option v-for="{ value, label } in typeOptions" :key="value" :value="value" :label="label" />
      </el-select>
    </div>

    <div>
      <p class="select-caption">BREED</p>
      <el-select v-model="valueParams.filterByName" class="select">
        <el-option v-for="{ value, label } in breedsOptions" :key="value" :value="value" :label="label" />
      </el-select>
    </div>

    <div>
      <p class="select-caption">LIMIT</p>
      <div class="flex gap-2.5">
        <el-select v-model="valueParams.limit" class="select">
          <el-option v-for="{ value, label } in limitOptions" :key="value" :value="value" :label="label" />
        </el-select>
        <button
          class="flex items-center justify-center w-[40px] h-[40px] rounded-[10px]
          bg-white fill-active hover:bg-active hover:fill-white ease-in-out duration-300"
          @click.prevent="onRefresh"
        >
          <RefreshIcon />
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
interface IOptionItem {
  value: string | number
  label: string
}

const breedsStore = useBreedsStore()
const { allBreeds, queryParams } = storeToRefs(breedsStore)

const typeValue = ref('all')

const valueParams = ref<IQueryParams>({
  filterByName: [''],
  limit: 10,
  sort: 'none'
})

function onRefresh () {
  const { filterByName, limit, sort } = valueParams.value

  queryParams.value = { filterByName, limit, sort }
}

const orderOptions: IOptionItem[] = [
  { label: 'Random', value: 'none' },
  { label: 'Ascending', value: 'asc' },
  { label: 'Descending', value: 'dsc' }
]

const typeOptions: IOptionItem[] = [
  { label: 'All', value: 'all' },
  { label: 'Static', value: 'static' },
  { label: 'Animated', value: 'animated' }
]

const breedsOptions: IOptionItem[] = [
  { label: 'All', value: '' },
  ...allBreeds.value.map(el => ({ label: el.name, value: el.name }))
]

const limitOptions: IOptionItem[] = [
  { label: '5 items per page', value: 5 },
  { label: '10 items per page', value: 10 },
  { label: '15 items per page', value: 15 },
  { label: '20 items per page', value: 20 }
]

</script>

<style lang="scss" scoped>
.select-caption {
  @apply px-normal text-pale font-medium text-[10px] leading-[18px] uppercase;
}

.select {
  @apply text-contrast bg-white rounded-[10px] w-full transition;
}
</style>
