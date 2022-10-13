<template>
  <el-button type="primary" @click="handelMessage">弹窗测试</el-button>
</template>
<script lang="ts">
import { CZMessage } from '@cz-coco/components';
// import {ElMessage} from "element-plus";
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'test',
  setup() {
    const handelMessage = () => {
      CZMessage({
        type: 'success',
        message: '我是测试的'
      })
    }
    return {
      handelMessage
    }
  }
})
</script>