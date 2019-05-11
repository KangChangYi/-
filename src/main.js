import Vue from 'vue';

import ElementUI from 'element-ui';
import store from './store';
import App from './App.vue';
import router from './router/index';

import './styles/element-variables.scss';
import './styles/public.scss';

// SVG
import './icons/index';

// ui默认大小medium
Vue.use(ElementUI, {
    size: 'medium',
});

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
