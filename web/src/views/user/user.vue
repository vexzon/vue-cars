<template>
  <div class="user-container">
    <div class="user-info">
      <img src="~@/assets/images/face.png" alt="" />
      <div class="meta">
        <h4 class="user-name">321512287</h4>
        <span>文明驾驶<strong>0</strong></span>
      </div>
    </div>
    <!-- 个人中心 功能 -->
    <ul class="group-links">
      <router-link to="aaa" tag="a" class="arrow-icon">
        <i class="icon icon-user-link-1"></i>
        我的账户
      </router-link>
      <router-link to="aaa" tag="a" class="arrow-icon">
        <i class="icon icon-user-link-2"></i>
        租车订单
      </router-link>
      <router-link to="aaa" tag="a" class="arrow-icon">
        <i class="icon icon-user-link-3"></i>
        实名认证
      </router-link>
      <router-link :to="{ name: 'safe' }" tag="a" class="arrow-icon">
        <i class="icon icon-user-link-4"></i>
        安全设置
      </router-link>
      <router-link to="aaa" tag="a" class="arrow-icon">
        <i class="icon icon-user-link-5"></i>
        帮助中心
      </router-link>
    </ul>
    <button class="logout">登出</button>
  </div>
</template>
<script>
export default {
  name: "user",
  computed: {}
};
</script>
<style lang="scss" scoped>
.user-info {
  padding: 84px 0 80px 10px;
  display: flex;

  img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border: 6px solid #2f343a;
  }
  .meta {
    flex: 1;
    padding-left: 7px;

    .user-name {
      color: #909090;
      line-height: 43px;
      font-size: 18px;
    }
    span {
      display: inline-block;
      height: 27px;
      padding: 0 17px;
      background-color: #10a0f2;
      border-radius: 100px;
      line-height: 27px;
      color: #fff;
      font-size: 14px;
    }
  }
}

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
