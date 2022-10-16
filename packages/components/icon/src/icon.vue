<!--
 * @Descripttion: 
 * @version: 
 * @Author: 十三
 * @Date: 2022-10-15 19:27:22
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-16 14:35:25
-->
<template>
  <i class="cz-icon" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { iconProps } from './icon';

export default defineComponent({
  name: 'WIcon',
  props: iconProps,
  setup(props) {
    const style = computed(() => {
      if (!props.size && !props.color) {
        return {};
      }
      return {
        ...(props.size ? { 'font-size': props.size + 'px' } : {}),
        ...(props.color ? { color: props.color } : {})
      };
    });

    return { style };
  }
});
</script>
