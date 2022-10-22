<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-21 21:44:20
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-21 22:24:50
-->
<template>
  <transition :name="`${ns.b('fade')}}`">
    <div :class="[ns.b()]">
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useNamespace, useCreateComponentName } from '@cz-coco/hooks';

export default defineComponent({
  name: useCreateComponentName('card'),
  setup() {
    const ns = useNamespace('card');
    return {
      ns
    };
  }
});
</script>
<style scoped lang="scss"></style>
