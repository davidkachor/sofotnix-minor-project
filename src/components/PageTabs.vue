<template>
  <div class="flex flex-row gap-normal">
    <router-link
      :to="lastUrl"
      class="bg-common hover:bg-main fill-main hover:fill-white w-[40px] h-[40px]
      rounded-[10px] flex items-center justify-center transition"
    >
      <ArrowIcon />
    </router-link>

    <template v-for="item in tabList" :key="item.name">
      <router-link
        v-if="item.url && item !== lastItem"
        :to="item.url"
        class="h-[40px] px-[30px] py-[5px] rounded-[10px] bg-common hover:bg-main text-main hover:text-white
        font-medium leading-[30px] uppercase tracking-[2px] transition"
      >
        {{ item.name }}
      </router-link>

      <span
        v-else
        :class="{
          'bg-main text-white': lastItem === item,
          'bg-common text-main': lastItem !== item
        }"
        class="h-[40px] px-[30px] py-[5px] rounded-[10px]
        font-medium leading-[30px] uppercase tracking-[2px]"
      >
        {{ item.name }}
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { LocationAsRelativeRaw } from 'vue-router'

const props = defineProps<{
  tabList: {name: string; url?: LocationAsRelativeRaw}[]
}>()

const global = useGlobalProperties()

const lastItem = computed(() => props.tabList[props.tabList.length - 1])
const lastUrl = computed(() => {
  return props.tabList.reduce(
    (acc, curr) => curr.url ? curr.url : acc,
    { name: global.$routeNames.home } as LocationAsRelativeRaw)
})
</script>

<style scoped lang="scss"></style>
