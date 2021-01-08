<template>
  <div class="cars-wrap">
    <div class="cars-swiper-wrap"><swiper></swiper></div>
  </div>
</template>
<script>
// 导入swiper插件
import Swiper from "@c/swiper/index";
export default {
  name: "Cars",
  components: {
    Swiper
  },
  data() {
    return {};
  },
  methods: {
    user() {
      this.$router.push("user");
    }
  }
};
</script>

<style lang="scss" scoped>
.cars-wrap {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 94px;
  z-index: 11;
}
.cars-swiper-wrap {
  padding: 0 155px;
}
</style>
