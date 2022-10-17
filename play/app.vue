<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-14 10:23:03
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-16 12:39:05
-->
<template>
  <div class="demo-mr">
    <cz-button plain disabled>
      Plain
    </cz-button>
    <cz-button
      type="primary"
      plain
      disabled
    >
      Primary
    </cz-button>
    <cz-button
      type="success"
      plain
      disabled
    >
      Success
    </cz-button>
    <cz-button
      type="info"
      plain
      disabled
    >
      Info
    </cz-button>
    <cz-button
      type="warning"
      plain
      disabled
    >
      Warning
    </cz-button>
    <cz-button
      type="danger"
      plain
      disabled
    >
      Danger
    </cz-button>
    <div>
      <cz-image
        src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"
        fit="cover"
        width="400"
        height="400"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.demo-mr {
  .cz-button {
    margin-right: 10px;
  }
}
</style>
