<template>
  <MainContentLayout>
    <div class="bg-white rounded-[20px] h-max p-medium flex flex-col box-border">
      <PageTabs :tab-list="[{name: 'Voting'}]" />

      <div class="mt-medium relative">
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

        <ActionButtons @add-dislike="addDislike(item)" @add-like="addLike(item)" @add-fav="addFavourite(item)" />
      </div>

      <div class="mt-[52px] flex flex-col overflow-y-auto gap-normal">
        <ActionLog v-for="action of history" :key="action.id" :item="action" />
      </div>
    </div>
  </MainContentLayout>
</template>

<script lang="ts" setup>
import MainContentLayout from '@/layouts/MainContentLayout.vue'
import { useGetRandomBreed } from './composables/get-random-breed'

const ratingsStore = useRatingsStore()
const { history } = storeToRefs(ratingsStore)
const { addDislike, addFavourite, addLike } = ratingsStore

const item = useGetRandomBreed()
</script>
