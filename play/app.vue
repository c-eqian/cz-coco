<template>
    <w-icon color="blue" :size="30" class="w-icon-delete">Hello Icon</w-icon>
    <w-button></w-button>
  <el-button @click="CZMessage.success({
        message: '我是测试的'
      })">
    弹窗
  </el-button>
</template>
<script lang="ts" setup>
import { CZMessage } from '@cz-coco/components'
</script>