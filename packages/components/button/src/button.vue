<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-14 10:23:03
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-15 12:50:23
-->
<template>
  <button :class="[`cz-button--${props.type}`, 'cz-button']">
    <slot />
  </button>
</template>

<script lang="ts" name="CZButton">
import { defineComponent } from 'vue';
import { buttonProps, IButtonProps } from './type';

export default defineComponent({
  name: 'CZButton',
  props: buttonProps,
  setup(props: IButtonProps) {
    return {
      props,
    };
  },
});
</script>
<style scoped lang="scss">
</style>
