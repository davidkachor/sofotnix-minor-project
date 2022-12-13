<template>
  <div class="grid-layout">
    <div v-for="(item, index) in data" :key="item.value + '' + index" class="w-full">
      <slot name="default" :item="item">
        <p>{{ item.value }}</p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    value: number | string
    [K: string]: any
  }[]
}>()

// const dataLength = computed(() => props.data.reduce((acc) => acc + '', ''))
</script>

<style scoped lang="scss">
// @function grid-area ($amount) {
//   $result: "item1 item2 item3"
//            "item1 item4 item4"
//            "item5 item4 item4"
//            "item6 item7 item8"
//            "item9 item9 item8"
//            "item9 item9 item10";
//   @if $amount <= 10 {
//     @return $result;
//   };

//   @for $i from 1 through $amount {
//     @if $i -
//   };
//   @return $result
// }

.grid-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  // @for $i from 0 to str-length(v-bind(dataLength)) {
  //   div:nth-child(2 + 10 * $i) {
  //     grid-row: 1 + 10 * $i / 2 + 10 * $i;
  //   }
  //   div:nth-child(5 + 10 * $i) {
  //     grid-column: 2 / 3;
  //     grid-row: 2 + 10 * $i / 3 + 10 * $i;
  //   }
  // }
}

</style>
