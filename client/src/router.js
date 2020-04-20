import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: "/login"
        },
        {
            path: '/register',
            name: '注册',
            component: () => import('./views/register.vue'),
        },
        {
            path: '/login',
            name: '登录',
            component: () => import('./views/login.vue'),
        },
        {
            path: '/goodsDetail',
            name: '商品详情',
            component: () => import('./views/Goods.vue'),
        },
        {
            path: '/categoryList',
            name: '分类列表',
            component: () => import('./views/CategoryList.vue'),
        }
    ]
})
