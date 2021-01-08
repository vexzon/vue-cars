<template>
  <div>
    <!-- 汽车标签 -->
    <section class="cars-item">
      <!-- 汽车品牌 和 可坐人数 -->
      <header>
        <h4 class="cars-logo">
          <img src="~@/assets/images/cars-logo.png" alt="Mustang 2020款" />
          <span class="name">Mustang 2020款</span>
        </h4>
        <p class="arrt">新能源汽车 5坐</p>
      </header>
      <!-- 汽车车牌 行驶公里数 电量 -->
      <div class="cars-content">
        <div class="info">
          <div>
            <h4 class="cars-number-plate">豫 A54321</h4>
            <!-- 汽车电量 -->
            <div>
              <ul class="cars-electric">
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p class="cars-distance">
                约<strong>666</strong>KM
              </p>
            </div>
          </div>
        </div>
        <img src="~@/assets/images/pic001.jpg" alt="" />
      </div>
      <!-- 停车位置 -->
      <footer>
        <a href="javascript:;" class="parking-link">XXX停车场</a>
      </footer>
    </section>
    <!-- 汽车详情 -->
    <section class="cars-item cars-detailed" :style="'height:' + height">
      <h4 class="colum">
        xxx 停车场
        <i class="close"></i>
      </h4>
      <h4 class="cars-logo">
        <img src="~@/assets/images/cars-logo.png" alt="Mustang 2020款" />
        <span class="name">Mustang 2020款</span>
      </h4>
      <p class="arrt">新能源汽车 5坐</p>
      <img src="~@/assets/images/pic001.jpg" alt="" width="100%" />
      <div class="clearfix">
        <h4 class=" pull-left fs-24">豫 A54321</h4>
        <p class="cars-distance pull-right ">
          约<strong>666</strong>KM
        </p>
      </div>
      <!-- 里程 -->
      <div class="cars-electric-box">
        <div class="p-r">
          <span class="e-high" style="width:80%"> </span
          ><span class="e-bg"></span>
        </div>
      </div>
      <!-- 使用提示 -->
      <p class="cars-tips">取车约支付12.0元停车费，实际补贴12.0元</p>
      <!-- 出租时长选项 -->
      <ul class="cars-type-list">
        <li class="current">
          <h4 class="cars-name ">日租车</h4>
          <span class="cars-price">￥300/天</span>
        </li>
        <li>
          <h4 class="cars-name">日租车</h4>
          <span class="cars-price">￥300/天</span>
        </li>
        <li>
          <h4 class="cars-name">日租车</h4>
          <span class="cars-price">￥300/天</span>
        </li>
        <li>
          <h4 class="cars-name">日租车</h4>
          <span class="cars-price">￥300/天</span>
        </li>
      </ul>
      <!-- 出租条款 -->
      <div class="clause-dec clearfix">
        <span class="pull-left">参保《全面保障服务》用车更放心</span>
        <i class="current"> </i>
      </div>
      <!-- 预约按钮 -->
      <div class="use-car">
        <a href="javascript:;" class="select-car-btn">预约用车</a>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "CarList",
  props: {
    height: {
      type: String,
      default: "257px"
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
.use-car {
  margin: 10px 0 0 80px;
}
</style>
