<template>
  <div class="user-container">
    <BackButton colum="修改登录密码" />
    <div class="cars-form-ui">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.name" placeholder="原始密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" placeholder="新密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <button class="button-vcode">获取验证码</button>
          <el-input v-model="form.name" placeholder="验证码"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="button-black"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChangeLoginPassword",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style lang="scss">
.cars-form-ui {
  .el-input__inner {
    background-color: #202429 !important;
    border: 1px solid #202429 !important;
    color: #fff;
    &::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    &::-moz-placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    &:-ms-input-placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    &:-moz-placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  .button-vcode {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 100px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    z-index: 2;
    outline: none;
    border: none;
    background-color: #34393f;
    cursor: pointer;
  }
}
.button-black {
  width: 100%;
}
</style>
