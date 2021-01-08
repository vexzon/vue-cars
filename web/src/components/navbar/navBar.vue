<template>
  <div class="navbar">
    <ul>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-search"></i></li>
      <li><a href="JavaScript:;" class="select-car-btn">选择车辆</a></li>
      <li><i class="icon icon-location"></i></li>
      <li><i class="icon icon-user"></i></li>
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
  display: inline;
  left: 0;
  right: 0;
  bottom: 86px;
  text-align: center;
  z-index: 10;
  li {
    display: inline-block;
  }
}
.select-car-btn {
  display: inline-block;
  margin: 0 20px;
  width: 240px;
  height: 84px;
  border-radius: 100px;
  line-height: 84px;
  text-align: center;
  color: #fff;
  font-size: 26px;
  background-color: $color-main;
}
.icon {
  vertical-align: middle;
  margin: 0 20px;
  cursor: pointer;
}
</style>
