<template>
  <div class="navbar">
    <ul>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-search"></i></li>
      <li><a href="JavaScript:;" class="select-car-btn">选择车辆</a></li>
      <li><i class="icon icon-location"></i></li>
      <li><i class="icon icon-user" @click="toUser"></i></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  methods: {
    toUser() {
      this.$router.push({
        name: "user"
      });
    }
  }
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

.icon {
  width: 44px;
  height: 44px;
  vertical-align: middle;
  margin: 0 20px;
  cursor: pointer;
}
</style>
