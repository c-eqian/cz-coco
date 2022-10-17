<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-16 13:33:29
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-17 12:38:49
-->

# message 消息弹窗

### 基础用法

[//]: # ':::demo'
[//]: # '<message-demo></message-demo>'

::: demo

```vue
<template>
  <cz-button type="primary" @click="handelMessage" class="cz-icon cz-icon-success"
    >弹窗测试</cz-button
  >
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
