import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';

import router from './router/index';

import GLOBAL from './utils/GLOBAL';

// 引入自定义主题色
import './styles/element-variables.scss';
import './styles/public.scss';

// SVG
import './icons/index';
// ui默认大小medium
Vue.use(ElementUI, {
    size: 'medium',
});

// 未登陆时路由拦截
router.beforeEach((to, from, next) => {
    if (to.name !== 'login') {
        if (GLOBAL.isLogin === false) {
            next(false);
        } else next();
    } else {
        next();
    }
});


Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
