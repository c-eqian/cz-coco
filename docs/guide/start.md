---
title: 开始
---
## 安装

```bash
npm i @cz-coco/layout
# or
yarn add @cz-coco/layout

npm i @cz-coco/table
# or
yarn add @cz-coco/table
```

## 使用

```vue
<template>
 <sum-layout>
   <sum-table/>
 </sum-layout>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import SumLayout from '@cz-coco/layout'
import SumTable from '@cz-coco/table'

export default defineComponent({
  name: 'sum-layout',
  components: { SumLayout, SumTable },
  setup() {}
})
</script>
```
