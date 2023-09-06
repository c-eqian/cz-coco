<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-14 10:23:03
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-16 12:41:56
-->

# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

:::
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

## 不同尺寸

提供三种不同尺寸的按钮。

:::demo

:::
```vue
<template>
  <div class="demo-mr">
    <cz-button size="large">Large</cz-button>
    <cz-button>Default</cz-button>
    <cz-button size="small">Small</cz-button>
    <cz-button size="large" :icon="Search">Search</cz-button>
    <cz-button size="small" :icon="Search">Search</cz-button>
    <cz-button type="primary" size="large">primary</cz-button>
    <cz-button type="success" size="small">success</cz-button>
    <cz-button type="info">Default</cz-button>
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
## 禁用状态

你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。
:::demo


:::
```vue
<template>
  <div class="demo-mr">
    <cz-button plain disabled>Plain</cz-button>
    <cz-button type="primary" plain disabled>Primary</cz-button>
    <cz-button type="success" plain disabled>Success</cz-button>
    <cz-button type="info" plain disabled>Info</cz-button>
    <cz-button type="warning" plain disabled>Warning</cz-button>
    <cz-button type="danger" plain disabled>Danger</cz-button>
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