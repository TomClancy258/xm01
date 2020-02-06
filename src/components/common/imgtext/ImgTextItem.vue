<template>
  <div class="img-text-item">
    <div>
      <slot name="item-img" />
    </div>
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ImgTextItem"
  }
</script>

<style scoped>
  @import "~assets/css/bs/bootstrap.css";
</style>