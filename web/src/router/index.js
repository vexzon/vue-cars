import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index/index.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Index",
  //   redirect: "/index"
  // },
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/user/user.vue")
      },
      // 安全设置
      {
        path: "/safe",
        name: "safe",
        component: () => import("@/views/safe/index.vue")
      },
      // 修改登录密码
      {
        path: "/password",
        name: "password",
        component: () => import("@/views/safe/ChangeLoginPassword.vue")
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
