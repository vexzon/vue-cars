<template>
  <div class="cars-wrap">
    <span @click="user">汽车列表</span>
  </div>
</template>
<script>
export default {
  name: "Cars",
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
  top: 0;
  z-index: 100;
}
</style>
