<template>
  <button :type="type">Primary</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import  { buttonProps, type IButtonProps } from "./type";

export default defineComponent({
  name: "CZButton",
  props:buttonProps,
  setup( prop: IButtonProps) {
    const handlerClick = () => {
      alert("WQ!!!!!!");
    };

    return {
      handlerClick,
    };
  },
});
</script>
