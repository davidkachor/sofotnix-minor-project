<template>
  <MainContentLayout>
    <div class="bg-white rounded-[20px] h-max p-medium flex flex-col box-border">
      <BackToMain :tab-list="['Voting']" />

      <div class="mt-medium relative">
        <div class="rounded-[20px] overflow-hidden">
          <el-image class="w-full" src="../../../src/assets/main/mocha-image.png" alt="item">
            <template #error>
              <div class="w-full flex items-center justify-center bg-gray-200 p-[60px]">
                <ImagePlaceholderIcon />
              </div>
            </template>
          </el-image>
        </div>

        <div class="button-group absolute bottom-[-44px] translate-x-[50%] right-[50%]">
          <el-button>
            <SmilePositiveIcon class="fill-white" />
          </el-button>

          <el-button class="bg-main">
            <HeartEmptyIcon class="fill-white" />
          </el-button>

          <el-button class="bg-yellow-shade">
            <SmileNegativeIcon class="fill-white" />
          </el-button>
        </div>
      </div>

      <div class="mt-[52px] flex flex-col overflow-y-auto gap-normal">
        <ActionLog v-for="(action, index) of actions" :key="index" :item="action" />
      </div>
    </div>
  </MainContentLayout>
</template>

<script lang="ts" setup>
import MainContentLayout from '@/layouts/MainContentLayout.vue'

const actions: IActionLog[] = [
  {
    imageId: '123123',
    time: {
      hour: 12,
      minutes: 21
    },
    type: 'Dislikes'
  },
  {
    imageId: '1asd23123',
    time: {
      hour: 13,
      minutes: 45
    },
    type: 'Dislikes'
  }, {
    imageId: '123asdzx123',
    time: {
      hour: 21,
      minutes: 23
    },
    type: 'Likes'
  }, {
    imageId: '12312asdasd3',
    time: {
      hour: 12,
      minutes: 21
    },
    type: 'Favourites'
  }, {
    imageId: '123ss12asdasd3',
    time: {
      hour: 12,
      minutes: 21
    },
    type: 'Favourites',
    remove: true
  }, {
    imageId: '123123',
    time: {
      hour: 12,
      minutes: 21
    },
    type: 'Dislikes'
  },
  {
    imageId: '1asd23123',
    time: {
      hour: 13,
      minutes: 45
    },
    type: 'Dislikes'
  }, {
    imageId: '123asdzx123',
    time: {
      hour: 21,
      minutes: 23
    },
    type: 'Likes'
  }, {
    imageId: '12312asdasd3',
    time: {
      hour: 12,
      minutes: 21
    },
    type: 'Favourites'
  }, {
    imageId: '123ss12asdasd3',
    time: {
      hour: 12,
      minutes: 21
    },
    type: 'Favourites',
    remove: true
  }
]
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
