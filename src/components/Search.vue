<template>
  <el-input v-model="inputValue" placeholder="Search for breads by name" type="search">
    <template #append>
      <el-button>
        <MagnifyingGlassIcon class="fill-main" />
      </el-button>
    </template>
  </el-input>
</template>

<script lang="ts" setup>
const inputValue = ref('')
</script>

<style lang="scss">
.el-input-group__append {
  background: white !important;
  width: 40px !important;
  border: none !important;
  box-shadow: none !important;
  padding: 10px 30px !important;

  button {
    width: 40px !important;
    height: 40px !important;
    background-color: #FBE0DC !important;
    padding: 10px !important;
    border-radius: 10px !important;

    &:hover {
      background-color: #FF868E !important;

      svg {
        fill: white
      }
    }
  }
}
.el-input__wrapper {
  box-shadow: none !important;
  border: none;
  border-color: none;
}
</style>
