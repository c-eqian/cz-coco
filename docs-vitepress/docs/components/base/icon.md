<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-14 10:23:03
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-17 18:36:34
-->

# icon 图标

## 基础用法

基础的按钮用法。

:::demo 使用`icon`、`size`属性来定义 icon 图标和大小。

```vue
<template>
  <div class="demo-mr">
    <cz-icon icon="success"></cz-icon>
    <cz-icon icon="unlock"></cz-icon>
    <cz-icon icon="link"></cz-icon>
    <cz-icon icon="filter"></cz-icon>
    <cz-icon icon="layers"></cz-icon>

    <cz-icon icon="menu"></cz-icon>
    <cz-icon icon="mic"></cz-icon>
    <cz-icon icon="more"></cz-icon>
    <cz-icon icon="operation"></cz-icon>
    <cz-icon icon="search"></cz-icon>
  </div>
</template>
<style scoped lang="scss">
.demo-mr {
  .cz-icon {
    margin-right: 10px;
    font-size: 30px;
  }
}
</style>
```

:::

## 不同尺寸

size 改变图标大小

:::demo

```vue
<template>
  <div class="demo-mr">
    <cz-icon icon="success" :size="16"></cz-icon>
    <cz-icon icon="success" :size="32"></cz-icon>
    <cz-icon icon="success" :size="40"></cz-icon>
    <cz-icon icon="success" :size="48"></cz-icon>
    <cz-icon icon="success" :size="52"></cz-icon>
  </div>
</template>
<style scoped lang="scss">
.demo-mr {
  .cz-icon {
    margin-right: 10px;
  }
}
</style>
```

:::

## 改变颜色

color 改变图标颜色

:::demo

```vue
<template>
  <div class="demo-mr">
    <cz-icon icon="success" color="green"></cz-icon>
    <cz-icon icon="success" color="red"></cz-icon>
    <cz-icon icon="success" color="blue"></cz-icon>
    <cz-icon icon="success" color="yellow"></cz-icon>
  </div>
</template>
<style scoped lang="scss">
.demo-mr {
  .cz-icon {
    margin-right: 10px;
    font-size: 30px;
  }
}
</style>
```

:::

