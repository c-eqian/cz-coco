<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-15 19:27:22
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-20 10:55:12
-->
<template>
  <transition :name="`${ns.b('fade')}`">
    <div
      v-show="state.visible"
      :class="[ns.b(), ns.is(_type)]"
      :style="{
        top: state.top + 'px'
      }"
    >
      <cz-icon :icon="_icon ?? iconMap[_type]" :class="[ns.e('icon')]" />
      <span>{{ _message }}</span>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { messageOptions } from '../types';
import { useNamespace } from '@cz-coco/hooks';

import { CzIcon } from '@cz-coco/components/icon';

const ns = useNamespace('message');
const props = defineProps(messageOptions);
const timer = ref<any>(null);
const height = ref<number>(40);
const margin = ref<number>(20);
const state = ref({
  visible: false,
  top: 0
});
const iconMap = {
  success: 'success-fill',
  info: 'info-circle-fill',
  error: 'error-filling',
  warning: 'warning-circle-fill'
};
const _icon = computed(() => iconMap[props.icon ?? ''] ?? props.icon);
const _message = computed(() => props.message);
const setVisible = (isVisible: boolean) => {
  return new Promise(resolve => {
    state.value.visible = isVisible;
    timer.value = setTimeout(() => {
      if (timer.value) clearTimeout(timer);
      timer.value = null;
      resolve('');
    }, 300);
  });
};
const setTop = (top: any) => {
  state.value.top = top;
  return top;
};
const _type = computed(() => props.type);
defineExpose({
  setTop,
  timer,
  setVisible,
  height,
  margin
});
</script>

<style scoped lang="scss"></style>
