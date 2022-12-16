<template>
  <MainContentLayout>
    <div class="bg-white rounded-[20px] h-max p-medium flex flex-col box-border">
      <PageTabs :tab-list="[{name: 'Voting'}]" />

      <p v-if="item === null" class="mt-medium text-center bg-layout py-medium text-pale rounded-[10px]">
        No breeds to rate left
      </p>

      <div v-else class="mt-medium relative">
        <el-image
          class="w-full h-[400px] rounded-[20px] "
          fit="cover"
          :src="item.image.url"
          :alt="item.name"
        >
          <template #error>
            <div class="w-full h-[400px] flex items-center justify-center bg-gray-200 p-[60px]">
              <ImagePlaceholderIcon />
            </div>
          </template>
        </el-image>

        <ActionButtons
          class="absolute bottom-[-44px] translate-x-[50%] right-[50%]"
          @add-dislike="addDislike(item as IBreed)"
          @add-like="addLike(item as IBreed)"
          @add-fav="addFavourite(item as IBreed)"
        />
      </div>

      <div class="mt-[52px] flex flex-col overflow-y-auto gap-normal">
        <ActionLog v-for="action of history" :key="action.id" :item="action" />
      </div>
    </div>
  </MainContentLayout>
</template>

<script lang="ts" setup>
import MainContentLayout from '@/layouts/MainContentLayout.vue'
import { useGetRandomUnratedBreed } from './composables/get-random-unrated-breed'

const ratingsStore = useRatingsStore()
const { history } = storeToRefs(ratingsStore)
const { addDislike, addFavourite, addLike } = ratingsStore

const item = useGetRandomUnratedBreed()
</script>
