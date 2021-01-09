<template>
  <div class="header-back">
    <div class="back">
      <i class="back-icon"></i>
      <h4 class="title">{{ colum }}</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "BackButton",
  props: {
    colum: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.header-back {
  padding-bottom: 147px;
  position: relative;

  .back {
    position: absolute;
    top: 21px;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;

    .title {
      font-size: 16px;
      margin-left: 50px;
      color: #fff;
    }
  }
}
.back-icon {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border-top: 2px solid $color-blur;
    border-left: 2px solid $color-blur;
    transform: rotate(-45deg);
    margin: 12px 0 0 18px;
  }
}
</style>
