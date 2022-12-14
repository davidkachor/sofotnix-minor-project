<template>
  <div class="flex flex-row gap-normal">
    <router-link
      :to="{ name: previousPageName }"
      class="bg-common w-[40px] h-[40px] rounded-[10px] flex items-center justify-center"
    >
      <ArrowIcon class="fill-main" />
    </router-link>

    <span
      v-for="item in tabList"
      :key="item"
      :class="{
        'bg-main text-white': lastItem === item,
        'bg-common text-main': lastItem !== item
      }"
      class="h-[40px] px-[30px] py-[5px] rounded-[10px]
      font-medium leading-[30px] uppercase tracking-[2px]"
    >
      {{ item }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  previousPageName?: string
  tabList: string[]
}>(), {
  previousPageName: () => useGlobalProperties().$routeNames.home
})
const lastItem = computed(() => props.tabList[props.tabList.length - 1])
</script>
