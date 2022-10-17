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
import { createComponentName } from '@cz-coco/utils/helper';

export default defineComponent({
  name: createComponentName('image'),
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
