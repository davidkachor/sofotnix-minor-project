<template>
  <div class="flex flex-col justify-between h-full bg-layout">
    <header>
      <router-link :to="{ name: $routeNames.home }">
        <img src="../assets/icons/main-logo.png" alt="logo" class="w-[106px]">
      </router-link>
    </header>

    <div class="flex flex-col gap-normal">
      <h1 class="font-medium text-[44px] leading-[58px]">Hi intern!</h1>
      <p class="font-normal text-pale text-medium leading-[30px]">Welcome to MSI 2021 Front-end test</p>
    </div>

    <section class="flex flex-col gap-medium">
      <h2 class="font-medium text-medium leading-[30px]">Let's start using The Dogs Api</h2>
      <div class="flex flex-row justify-between gap-2">
        <article class="link-item">
          <div class="bg-purple-shade">
            <img
              class="w-[100px]"
              src="../assets/link-images/voting.png"
              alt="voting"
            >
          </div>
          <router-link :to="{name: $routeNames.voting}">Voting</router-link>
        </article>

        <article class="link-item">
          <div class="bg-green-shade">
            <img
              class="w-[117px]"
              src="../assets/link-images/breeds.png"
              alt="breeds"
            >
          </div>
          <router-link :to="{ name: $routeNames.breeds }">Breeds</router-link>
        </article>

        <article class="link-item">
          <div class="bg-yellow-shade">
            <img
              class="w-[112px]"
              src="../assets/link-images/gallery.png"
              alt="gallery"
            >
          </div>
          <router-link :to="{ name: $routeNames.gallery }">Gallery</router-link>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.link-item {
  @apply flex flex-col gap-normal;

  div {
    @apply w-[138px] h-[198px] flex justify-center items-center box-border rounded-[20px];
    border: 4px solid rgba(255, 255, 255, 0.6);

    img {
      @apply max-w-full;
    }
  }

  a {
    @apply bg-white rounded-[10px] font-jost py-normal text-center font-medium text-xs leading-4 tracking-[2px]
    uppercase text-main hover:bg-common transition;

    &.exact {
      @apply bg-main text-white;
    }
  }
}
</style>
