<template>
  <nav class="flex gap-normal">
    <Search />

    <router-link class="nav-link" :to="{ name: $routeNames.likes }">
      <SmilePositiveIcon />
    </router-link>

    <router-link class="nav-link !py-[17px]" :to="{ name: $routeNames.favorites }">
      <HeartEmptyIcon />
    </router-link>

    <router-link class="nav-link" :to="{ name: $routeNames.dislikes }">
      <SmileNegativeIcon />
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
.nav-link {
  @apply bg-white hover:bg-common rounded-[20px] p-[15px] transition;

  svg {
    @apply fill-main;
  }

  &.exact {
    @apply bg-main;

    svg {
      @apply fill-white;
    }
  }
}
</style>
