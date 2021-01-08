<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide><car-list height="800px"></car-list></swiper-slide>
      <swiper-slide><car-list></car-list></swiper-slide>
      <swiper-slide><car-list></car-list></swiper-slide>
      <swiper-slide><car-list></car-list></swiper-slide>
      <swiper-slide><car-list></car-list></swiper-slide>
      <swiper-slide><car-list></car-list></swiper-slide>
      <swiper-slide><car-list></car-list></swiper-slide>
      <swiper-slide><car-list></car-list></swiper-slide>
    </swiper>
    <div class="swiper-button-prev swiper-left-btn" slot="button-prev"></div>
    <div class="swiper-button-next swiper-right-btn" slot="button-next"></div>
  </div>
</template>

<script>
// 导入可选汽车列表
import CarList from "../../views/cars/carlist/index";
// 导入swiper组件
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiper-example-multiple-slides-per-biew",
  title: "Multiple slides per view",
  components: {
    Swiper,
    SwiperSlide,
    CarList
  },
  data() {
    return {
      swiperOption: {
        // 显示个数
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.swiper-left-btn,
.swiper-right-btn {
  width: 60px;
  height: 100px;
  border-radius: 100px;
  background-color: #fff;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.2);
  top: 50%;
  margin-top: -50px;
  outline: none;
  &.swiper-button-disabled {
    opacity: 1;
    background-color: rgb(209, 194, 194);
  }
  &:after {
    color: #000;
    font-size: 30px;
  }
  &:hover {
    background-color: $color-main;
    &::after {
      color: $color-blur;
    }
  }
}
.swiper-left-btn {
  left: 54px;
}
.swiper-right-btn {
  right: 54px;
}
.swiper {
  overflow: initial;
}
</style>
