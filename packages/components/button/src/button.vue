<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-14 10:23:03
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-16 00:30:34
-->
<template>
  <button :class="[ns.m(props.type), ns.b()]">
    <slot />
  </button>
</template>

<script  lang="ts">
import { defineComponent } from 'vue';
import { buttonProps, IButtonProps  } from './type';
import { createComponentName,useNamespace } from '@cz-coco/utils/helper';

export default defineComponent({
  name: createComponentName('button'),
  props: buttonProps,
  setup(props: IButtonProps) {
    const ns = useNamespace('button');
    console.log(ns.b())
    return {
      props,
      ns,
    };
  },
});
</script>
<style scoped lang="scss">
</style>
