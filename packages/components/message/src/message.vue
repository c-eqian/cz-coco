<template>
  <transition name="cz-message-fade">
    <div
      v-show="state.visible"
      :class="styleClass"
      :style="{
        top:state.top + 'px'
      }"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { CMessageType } from '../types/type';

const props = defineProps({
  type: {
    type: String,
    default: CMessageType.message,
  },
  message: {
    type: String,
    default: '',
  },
});
const timer = ref<any>(null);
const height = ref<number>(40);
const margin = ref<number>(20);
const state = ref({
  visible: false,
  top: 0,
});
const setVisible = (isVisible:boolean) => {
  return new Promise((resolve) => {
    state.value.visible = isVisible;
    timer.value = setTimeout(() => {
      if (timer.value) clearTimeout(timer);
      timer.value = null;
      resolve('');
    }, 300);
  });
};
const setTop = (top:any) => {
  console.log(top);
  state.value.top = top;
  return top;
};
const styleClass = computed(() => [
  'cz-message',
  props.type,
]);
defineExpose({
  setTop,
  setVisible,
  height,
  margin,
});
</script>

<style scoped lang="scss">
@import "../style/style.scss";
</style>
