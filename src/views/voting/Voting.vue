<template>
  <MainContentLayout>
    <div class="bg-white rounded-[20px] h-max p-medium flex flex-col box-border">
      <PageTabs :tab-list="[{name: 'Voting'}]" />

      <div class="mt-medium relative">
        <div class="rounded-[20px] overflow-hidden">
          <el-image class="h-full" fit="cover" :src="item.image.url" :alt="item.name">
            <template #error>
              <div class="w-full flex items-center justify-center bg-gray-200 p-[60px]">
                <ImagePlaceholderIcon />
              </div>
            </template>
          </el-image>
        </div>

        <div class="button-group absolute bottom-[-44px] translate-x-[50%] right-[50%]">
          <el-button>
            <SmilePositiveIcon class="fill-white" @click="addLike(item)" />
          </el-button>

          <el-button class="bg-main">
            <HeartEmptyIcon class="fill-white" @click="addFavourite(item)" />
          </el-button>

          <el-button class="bg-yellow-shade">
            <SmileNegativeIcon class="fill-white" @click="addDislike(item)" />
          </el-button>
        </div>
      </div>

      <div class="mt-[52px] flex flex-col overflow-y-auto gap-normal">
        <ActionLog v-for="(action, index) of history" :key="index" :item="action" />
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

<style scoped lang="scss">
.button-group {
  @apply inline-block gap-[4px] bg-white w-min rounded-[20px] border-[4px] border-solid border-white overflow-hidden;

  display: grid;
  grid-template-columns: 80px 80px 80px;

  button {
    @apply w-auto border-none rounded-none p-[25px] m-0 h-auto;

    &:nth-child(1) {
      @apply bg-green-shade;
      &:hover {
        @apply bg-[#97EAB94D];

        svg {
          @apply fill-green-shade;
        }
      }
    }

    &:nth-child(2) {
      @apply bg-main;
      &:hover {
        @apply bg-[#FF868E4D];

        svg {
          @apply fill-main;
        }
      }
    }

    &:nth-child(3) {
      @apply bg-yellow-shade;
      &:hover {
        @apply bg-[#FFD2804D];

        svg {
          @apply fill-yellow-shade;
        }
      }
    }
  }
}
</style>
