<template>
  <div class="button-group absolute bottom-[-44px] translate-x-[50%] right-[50%]">
    <el-button @click="$emit('add-like')">
      <SmilePositiveIcon class="fill-white" />
    </el-button>

    <el-button class="bg-main" @click="$emit('add-fav')">
      <HeartEmptyIcon class="fill-white" />
    </el-button>

    <el-button class="bg-yellow-shade" @click="$emit('add-dislike')">
      <SmileNegativeIcon class="fill-white" />
    </el-button>
  </div>
</template>

<script setup lang="ts">
defineEmits(['add-like', 'add-fav', 'add-dislike'])
</script>

<style lang="scss" scoped>
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
