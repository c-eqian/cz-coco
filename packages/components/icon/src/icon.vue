<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-15 19:27:22
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-19 19:43:23
-->
<template>
  <i :class="[ns.b(), ns.b(iconName)]" :style="style">
    <slot />
  </i>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { iconProps } from './type';
import { useCreateComponentName, useNamespace } from '@cz-coco/hooks';

export default defineComponent({
  name: useCreateComponentName('icon'),
  props: iconProps,
  setup(props) {
    const ns = useNamespace('icon');
    const iconName = computed(() => props.icon);
    const style = computed(() => {
      if (!props.size && !props.color) {
        return {};
      }
      return {
        ...(props.size ? { 'font-size': `${props.size}px` } : {}),
        ...(props.color ? { color: props.color } : {})
      };
    });

    return { style, ns, iconName };
  }
});
</script>
