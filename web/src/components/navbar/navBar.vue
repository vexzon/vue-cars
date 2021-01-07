<template>
  <div class="navbar">
    <ul>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-help"></i></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "navbar"
};
</script>
<style lang="scss" scoped>
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 86px;
  text-align: center;
  z-index: 10;
  li {
    display: inline-block;
  }
}
</style>
