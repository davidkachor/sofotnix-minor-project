<template>
  <MainContentLayout>
    <div class="bg-white rounded-[20px] p-medium flex flex-col gap-medium">
      <nav class="flex justify-between items-center">
        <PageTabs :tab-list="[{ name: 'Gallery' }]" />

        <el-button
          class="uppercase tracking-[2px] px-[30px] py-3 text-xs h-auto rounded-[10px] font-medium"
          type="primary"
          @click="uploadModalOpen = true"
        >
          <template #icon>
            <UploadIcon class="h-4" />
          </template>
          Upload
        </el-button>
      </nav>

      <GalleryForm />

      <GridContentLayout class="gap-medium" :data="gridData">
        <template #grid-item="{ item }">
          <GalleryBreedItem :breed-item="(item.ref as IBreed)" :name="item.name" :src="item.src" />
        </template>
      </GridContentLayout>
    </div>
  </MainContentLayout>

  <UploadPhotoModal v-if="uploadModalOpen" @close="uploadModalOpen = false" />
</template>

<script setup lang="ts">
import MainContentLayout from '@/layouts/MainContentLayout.vue'
import GridContentLayout from '@/layouts/GridContentLayout.vue'

const breedsStore = useBreedsStore()
const { filteredBreeds } = storeToRefs(breedsStore)
const { resetQueryParams } = breedsStore

const uploadModalOpen = ref(false)

const gridData = computed<IGridItem[]>(() => {
  return filteredBreeds.value.map(el => ({ value: el.id, name: el.name, src: el.image.url, ref: el }))
})

onMounted(() => resetQueryParams())

</script>

<style lang="scss">
  </style>
