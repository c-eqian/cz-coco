# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```vue
<template>
  <el-button type="primary" @click="handelMessage">弹窗测试</el-button>
</template>
<script lang="ts">
// import { CZMessage } from '@cz-coco/components';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'test',
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

:::

## 不同尺寸

提供三种不同尺寸的按钮。

:::demo

```vue
<template>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</template>
```

:::