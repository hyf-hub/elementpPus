import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
  path: "/",
  name: "Home",
  component: Home,
}, {
  path: "/login",
  name: "Login",
  meta: {
    title: '登录'
  },
  component: () => import("../views/login.vue")
}
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
});

// router.beforeEach((to, from, next) => { 
//   document.title = `${to.meta.title} | vue-manage-system`;
//   const role = localStorage.getItem('ms_username');
//   if (!role && to.path !== '/login') {
//     next('/login');
//   } else if (to.meta.permission) {
//     // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//     role === 'admin'
//       ? next()
//       : next('/403');
//   } else {
//     next();
//   }
// });
// router.beforeEach((to, from, next) => { 
//   const token = localStorage.getItem('token') || '';
//   if(to.path === '/login') {
//     next();
//   }else {
//     token ? next() : next('/login')
//   }
// })
export default router;