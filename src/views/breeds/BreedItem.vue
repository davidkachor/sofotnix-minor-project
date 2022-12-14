<template>
  <MainContentLayout>
    <div class="bg-white p-medium rounded-[20px] flex flex-col gap-medium">
      <BackToMain :tab-list="['breeds', id]" :previous-page-name="$routeNames.breeds" />

      <el-image :src="breed.image.url" alt="item" class="min-h-[200px] rounded-[20px]">
        <template #error>
          <div class="w-full h-full flex items-center justify-center bg-gray-200 p-[60px]">
            <ImagePlaceholderIcon class="w-10 h-10" />
          </div>
        </template>
      </el-image>

      <section
        class="relative mt-[51px] border-solid border-[2px] border-common px-10 pb-10 pt-[26px]
        rounded-[20px] flex flex-col gap-medium"
      >
        <h2
          class="absolute left-[50%] translate-x-[-50%] top-0 translate-y-[-50%] bg-white
          font-medium text-contrast text-4xl leading-[52px] px-10 py-[5px] text-center"
        >
          {{ breed.name }}
        </h2>

        <p class="text-center font-medium text-pale text-xl">{{ breed.bred_for }}</p>

        <div class="grid grid-cols-2 gap-medium">
          <div>
            <p class="text-pale">
              <strong class="text-contrast font-medium">Temperament:</strong><br>
              {{ breed.temperament }}
            </p>
          </div>

          <div>
            <p class="text-pale">
              <strong class="text-contrast font-medium">Height:</strong> {{ breed.height.metric }}
            </p>
            <p class="text-pale">
              <strong class="text-contrast font-medium">Weight:</strong> {{ breed.weight.metric }}
            </p>
            <p class="text-pale">
              <strong class="text-contrast font-medium">Life span:</strong> {{ breed.life_span }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </MainContentLayout>
</template>

<script setup lang="ts">
import MainContentLayout from '@/layouts/MainContentLayout.vue'

const props = defineProps<{ id: string }>()

const { allBreeds } = storeToRefs(useBreedsStore())
const breed = allBreeds.value[props.id]
</script>
