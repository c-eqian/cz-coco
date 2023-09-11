<script setup lang="ts">
import {CO_SWIPER_ITEM_NAME} from '../types/index';

defineOptions({
  name: CO_SWIPER_ITEM_NAME
})
</script>

<template>
  <div class="cz-swiper-item">
    <slot></slot>
  </div>

</template>

<style scoped lang="scss">
.cz-swiper-item {
  width: 100%;
  height: 100%;
}
</style>