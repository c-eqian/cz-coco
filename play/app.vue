<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-14 10:23:03
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-20 00:27:39
-->
<template>
  <div class="demo-mr">
    <cz-button type="primary" @click="test"> 测试 </cz-button>
  </div>
</template>
<script lang="ts" setup>
import { CzMessage } from '@cz-coco/components';

const test = () => {
  CzMessage({
    type: 'success',
    message: '测试 LastEditTime',
    duration: 10000
  });
};
</script>
<style scoped lang="scss">
.demo-mr {
  .cz-button {
    margin-right: 10px;
  }
}
</style>
