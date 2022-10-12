---
title: 开始
---
## 安装

```bash
npm i @sum-ui/layout
# or
yarn add @sum-ui/layout

npm i @sum-ui/table
# or
yarn add @sum-ui/table
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
import SumTable from '@cz-coco/components'

export default defineComponent({
  name: 'cz-coco',
  components: { SumTable },
  setup() {}
})
</script>
```
