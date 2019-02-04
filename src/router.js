import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

// 除了下面import的按需加载写法，还可以这样写
const Detail = (resolve) => {
    require.ensure(['./views/Detail.vue'], () => {
        resolve(require('./views/Detail.vue'));
    });
}

// 配置动态获取二级目录publicPath
const base = `${process.env.BASE_URL}`;

export default new Router({
    // history模式依赖的是h5的history
    mode: 'history',
    // 路由前缀加上地址
    base: base,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // import语法需要配合Vue的异步组件，require.ensure()是webpack特有的，遵循common.js
            // webpack 提供的 Magic Comments，定义拆分出来的文件名
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail
        }
    ]
})
