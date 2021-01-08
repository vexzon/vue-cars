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
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
