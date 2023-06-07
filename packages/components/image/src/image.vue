<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-19 00:30:34
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-19 19:43:50
-->
<template>
  <img
    :style="style"
    :src="props.src"
    :alt="props.alt"
  >
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { imageProps } from './image';
import { useCreateComponentName } from '@cz-coco/hooks';

export default defineComponent({
  name: useCreateComponentName('image'),
  props: imageProps,
  setup(props) {
    const style = computed(() => {
      // 如果对象里各项值都为空就返回空对象
      if (Object.keys(props).length === 0) {
        return {};
      }
      return {
        ...(props.width ? { width: `${props.width}px` } : {}),
        ...(props.height ? { height: `${props.height}px` } : {}),
        ...(props.fit ? { objectFit: props.fit } : {})
      };
    });
    return { style, props };
  }
});
</script>

<style scoped lang="scss"></style>
