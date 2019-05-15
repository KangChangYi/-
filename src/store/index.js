import Vue from 'vue';

import Vuex from 'vuex';

import mutations from './mutations';

// 整体分析
import whole from './modules/whole';

import actions from './actions';

Vue.use(Vuex);

const state = {
    isLogin: true,
    userName: 'test',
    passWord: 'test',
    userGroup: [{ enable: '已启用', value: '所有用户', number: 3410 },
        { enable: '已启用', value: '已注册用户', number: 1295 },
        { enable: '已启用', value: '余额100以内用户', number: 578 },
        { enable: '已启用', value: '沉默用户', number: 302 },
    ],
    events: [{ value: '登录' },
        { value: '注册-开始注册' },
        { value: '注册-完成注册' },
        { value: '付款成功' },
        { value: '付款失败' },
        { value: '搜索商品' }],
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {
        whole,
    },
});
