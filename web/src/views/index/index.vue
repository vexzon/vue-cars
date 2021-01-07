<template>
  <div>
    <!-- 导航 -->
    <nav-bar></nav-bar>
    <!-- 地图 -->
    <a-map></a-map>
    <!-- cars data 渲染 -->
    <cars></cars>

    <!-- 会员 -->
    <div class="user-members" :class="{ open: show }">
      <router-view />
    </div>
  </div>
</template>
<script>
import AMap from "../amap/amap";
import Cars from "../cars/cars";
import NavBar from "@c/navbar/navBar";
export default {
  name: "index",
  components: {
    AMap,
    Cars,
    NavBar
  },
  data() {
    return {};
  },
  computed: {
    show() {
      const router = this.$route;
      return router.name === "Index" ? false : true;
    }
  },
  watch: {}
};
</script>
<style lang="scss" scoped>
.user-members {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -600px;
  width: 400px;
  background-color: #34393f;
  z-index: 101;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;

  &.open {
    right: 0;
  }
}
</style>
