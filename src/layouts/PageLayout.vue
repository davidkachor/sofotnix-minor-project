<template>
  <aside class="bg-gray-200 w-[446px] h-[544px] rounded-[20px] mx-auto sticky top-[30px]">
    <slot />
  </aside>
  <main class="w-[680px] rounded-[20px]">
    <router-view />
  </main>
</template>

<style lang="scss">
#app {
  @apply flex flex-row p-[30px] gap-medium justify-between;
}
body {
  @apply bg-layout;
}
</style>
