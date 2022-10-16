# message 消息弹窗

### 基础用法

[//]: # ':::demo'
[//]: # '<message-demo></message-demo>'

::: demo

```vue
<template>
  <cz-button type="primary" @click="handelMessage">弹窗测试</cz-button>
</template>
<script lang="ts">
import { CZMessage } from '@cz-coco/components';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const handelMessage = () => {
      CZMessage({
        type: 'success',
        message: '我是测试的'
      });
    };
    return {
      handelMessage
    };
  }
});
</script>
```
