<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-16 13:33:29
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-20 01:28:35
-->

# message 消息弹窗

### 基础用法

[//]: # ':::demo'
[//]: # '<message-demo></message-demo>'

::: demo

```vue
<template>
  <cz-button type="success" @click="handelMessage('success')"> success </cz-button>
  <cz-button type="danger" @click="handelMessage('error')"> error </cz-button>
  <cz-button type="warning" @click="handelMessage('warning')"> warning </cz-button>
  <cz-button type="info" @click="handelMessage('info')"> info </cz-button>
</template>
<script lang="ts">
import { CzMessage } from '@cz-coco/components';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const handelMessage = (type: string) => {
      CzMessage({
        type: type,
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

:::

### 指定属性

::: demo

```vue
<template>
  <cz-button type="success" @click="CzMessage.success('success')"> success </cz-button>
  <cz-button type="danger" @click="CzMessage.error('error')"> error </cz-button>
  <cz-button type="warning" @click="CzMessage.warning('warning')"> warning </cz-button>
  <cz-button type="info" @click="CzMessage.info('info')"> info </cz-button>
</template>
<script lang="ts">
import { CzMessage } from '@cz-coco/components';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      CzMessage
    };
  }
});
</script>
```

:::

### 自定义图标

::: demo

```vue
<template>
  <cz-button type="success" @click="handelMessage('success', 'security')"> success </cz-button>
  <cz-button type="danger" @click="handelMessage('error', 'cry')"> error </cz-button>
  <cz-button type="warning" @click="handelMessage('warning', 'good-fill')"> warning </cz-button>
  <cz-button type="info" @click="handelMessage('info', 'camera')"> info </cz-button>
</template>
<script lang="ts">
import { CzMessage } from '@cz-coco/components';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const handelMessage = (type: string, icon: string) => {
      CzMessage({
        type: type,
        icon: icon,
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

:::
