<template>
  <MainContentLayout>
    <div class="bg-white p-medium rounded-[20px] flex flex-col gap-medium">
      <PageTabs
        :tab-list="[{name: 'breeds', url: {name: $routeNames.breeds}}, {name: id}]"
      />

      <BreedImageAndTitle :url="breed?.image.url" :name="breed?.name" />

      <BreedInfo
        :bred-for="breed?.bred_for"
        :height="breed?.height.metric"
        :weight="breed?.weight.metric"
        :temperament="breed?.temperament"
        :life-span="breed?.life_span"
      />
    </div>
  </MainContentLayout>
</template>

<script setup lang="ts">
import MainContentLayout from '@/layouts/MainContentLayout.vue'
const router = useRouter()
const globalProps = useGlobalProperties()
const props = defineProps<{ id: string }>()

const { allBreeds } = storeToRefs(useBreedsStore())
const breed = allBreeds.value.find(el => String(el.id) === props.id)

onBeforeMount(() => {
  if (!breed) router.push({ name: globalProps.$routeNames.breeds })
})
</script>
