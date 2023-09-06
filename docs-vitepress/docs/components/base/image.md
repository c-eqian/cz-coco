<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-19 00:30:34
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-19 00:59:20
-->

# image 图片

图片容器，保留原生 img 的一些特性

## 基础用法

```vue
<template>
  <div class="demo-mr">
    <cz-image
      src="https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
    ></cz-image>
    <cz-image
      src="https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
    ></cz-image>
  </div>
</template>
<style scoped lang="scss">
.demo-mr {
  .cz-image {
    margin-right: 50px;
  }
}
</style>
```

## 设置宽高

通过设置`width`、`height`属性改变大小

```vue
<template>
  <div class="demo-mr">
    <cz-image :src="image1" width="200" height="200" />
  </div>
  <div class="demo-mr">
    <cz-image :src="image2" width="300" height="300" />
  </div>
</template>
<script lang="ts" setup>
const image1 =   'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
const image2 = 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
</script>
<style scoped lang="scss">
.demo-mr {
  padding: 30px 0;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
}
</style>
```
