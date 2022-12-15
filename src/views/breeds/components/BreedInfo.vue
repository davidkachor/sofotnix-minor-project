<template>
  <section
    class="mt-7 border-solid border-[2px] border-common p-10
        rounded-[20px] flex flex-col gap-medium"
  >
    <p class="text-center font-medium text-pale text-xl">{{ bredFor }}</p>

    <div class="grid grid-cols-2 gap-medium">
      <div>
        <p class="text-pale">
          <strong class="text-contrast font-medium">Temperament:</strong><br>
          {{ temperament }}
        </p>
      </div>

      <div>
        <p class="text-pale">
          <strong class="text-contrast font-medium">Height:</strong> {{ height }}
        </p>
        <p class="text-pale">
          <strong class="text-contrast font-medium">Weight:</strong> {{ weight }}
        </p>
        <p class="text-pale">
          <strong class="text-contrast font-medium">Life span:</strong> {{ lifeSpan }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  bredFor?: string
  temperament?: string
  height?: string
  weight?: string
  lifeSpan?: string
}>()
</script>
