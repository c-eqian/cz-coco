<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-14 10:23:03
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-16 00:53:28
-->

# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```vue
<template>
  <div class="demo-mr">
    <cz-button type="primary">primary</cz-button>
    <cz-button type="success">success</cz-button>
    <cz-button type="info">info</cz-button>
    <cz-button type="warning">warning</cz-button>
    <cz-button type="danger">danger</cz-button>
    <cz-button type="text">text</cz-button>
  </div>
</template>
<style scoped lang="scss">
.demo-mr {
  .cz-button {
    margin-right: 10px;
  }
}
</style>
```

:::

## 不同尺寸

提供三种不同尺寸的按钮。

:::demo

```vue
<template>
  <div class="demo-mr">
    <cz-button type="primary">primary</cz-button>
    <cz-button type="success">success</cz-button>
    <cz-button type="info">info</cz-button>
    <cz-button type="warning">warning</cz-button>
    <cz-button type="danger">danger</cz-button>
    <cz-button type="text">text</cz-button>
  </div>
</template>
<style scoped lang="scss">
.demo-mr {
  .cz-button {
    margin-right: 10px;
  }
}
</style>
```

:::
