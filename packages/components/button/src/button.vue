<!--
 * @Descripttion: 
 * @version: 
 * @Author: 十三
 * @Date: 2022-10-14 10:23:03
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-14 16:26:22
-->
<template>
  <button :class="[`cz-button--${props.type}`, 'cz-button']" >
  <slot></slot>
  </button>
</template>

<script lang="ts" name="CZButton">
import { defineComponent, computed, watch } from 'vue'
import  { buttonProps, type IButtonProps } from "./type";
export default defineComponent({
  name: "CZButton",
  props:buttonProps,
  setup(props: IButtonProps) {
    return {
      props
    };
  },
});
</script>
<style scoped lang="scss">
.cz-button {
  &--primary {
    background-color: #409eff;
  }
}

</style>
