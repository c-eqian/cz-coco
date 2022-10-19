<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-14 10:23:03
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-19 19:42:33
-->
<template>
  <button
    :class="[
      ns.m(_type),
      ns.m(_size),
      ns.b(),
      ns.is('disabled', _disabled),
      ns.is('plain', _plain)
    ]"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { buttonProps, IButtonProps } from './type';
import { useCreateComponentName, useNamespace } from '@cz-coco/hooks';

export default defineComponent({
  name: useCreateComponentName('button'),
  props: buttonProps,
  setup(props: IButtonProps) {
    const ns = useNamespace('button');
    const _type = computed(() => props.type);
    const _size = computed(() => props.size);
    const _disabled = computed(() => props.disabled);
    const _plain = computed(() => props.plain);
    return {
      _type,
      _size,
      _disabled,
      _plain,
      ns
    };
  }
});
</script>
<style scoped lang="scss"></style>
