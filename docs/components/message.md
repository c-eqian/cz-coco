---
title: 'message弹窗'
desc: '描述'
---

### 基础用法

[//]: # (:::demo)

[//]: # (<message-demo></message-demo>)

::: demo
```vue
<template>
  <button type="primary" @click="handelMessage">弹窗测试</button>
</template>
<script lang="ts">
// import { CZMessage } from '@cz-coco/components';
// import {ElMessage} from "element-plus";
import {defineComponent} from 'vue';

export default defineComponent({
  setup() {
    const handelMessage = () => {
      // CZMessage({
      //   type: 'success',
      //   message: '我是测试的'
      // })
    }
    return {
      handelMessage
    }
  }
})
</script>
```

