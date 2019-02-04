import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// 前端客户端代码之所以可以打印process.env.NODE_ENV变量，是由于使用了webpack的DefinePlugin内置插件
// 开发环境是development，生产环境是production，CLI可通过.env文件修改默认配置
if (process.env.NODE_ENV !== 'production') {
    console.log(`${process.env.NODE_ENV} mode`);
}

console.log(process.env)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
