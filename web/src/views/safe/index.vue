<template>
  <div class="user-container">
    <BackButton colum="安全设置" />
    <!-- 个人中心 功能 -->
    <ul class="group-links">
      <router-link to="/password" tag="a" class="arrow-icon">
        修改登录密码
      </router-link>
      <router-link to="aaa" tag="a" class="arrow-icon">
        设置资金密码
      </router-link>
      <router-link to="aaa" tag="a" class="arrow-icon">
        绑定手机号
      </router-link>
      <router-link to="aaa" tag="a" class="arrow-icon">
        绑定银行卡
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Safe",
  computed: {}
};
</script>
<style lang="scss" scoped>
.group-links {
  a {
    position: relative;
    display: block;
    margin: 0 -30px;
    padding: 0 32px;
    height: 64px;
    line-height: 64px;
    color: rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid #111;
    font-size: 18px;
  }
  .icon {
    width: 30px;
    height: 30px;
    margin: 0 16px -10px 0;
  }
}

.logout {
  position: relative;
  left: 50%;
  margin-left: -82px;
  top: 60px;
  width: 165px;
  height: 58px;
  text-align: center;
  line-height: 58px;
  color: #fff;
  font-size: 18px;
  background-color: #2d3339;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: $color-blur;
  }
}
// 箭头图标
.arrow-icon::after {
  position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  box-sizing: border-box;
  transform: rotate(45deg);
  right: 30px;
  top: 50%;
  margin-top: -5px;
  opacity: 0.5;
}
</style>
