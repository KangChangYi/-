import Vue from 'vue';

import Vuex from 'vuex';

import mutations from './mutations';

// 整体分析
import whole from './modules/whole';
// 事件分析
import event from './modules/event';
// 留存分析
import retain from './modules/retain';

import portrait from './modules/portrait';
import actions from './actions';


Vue.use(Vuex);

const state = {
    isLogin: true,
    userName: 'Turner',
    passWord: 'test',
    appName: '理财',
    userGroup: [{ enable: '已启用', value: '所有用户', number: 3410 },
        { enable: '已启用', value: '最近7天付款用户', number: 1295 },
        { enable: '已启用', value: '余额100元以内用户', number: 578 },
        { enable: '已启用', value: '沉默用户', number: 302 },
    ],
    events: [{ value: '登录' },
        { value: '注册-开始注册' },
        { value: '注册-完成注册' },
        { value: '付款成功' },
        { value: '付款失败' },
        { value: '搜索' },
    ],
    attribute: [{ value: '省份' },
        { value: '城市' },
        { value: '操作系统' },
        { value: '访问机型' },
        { value: '来源域名' },
        { value: '浏览器品牌' },
        { value: '浏览器版本' },
        { value: '屏幕高度' },
        { value: '屏幕宽度' },
        { value: 'IP' },
    ],
};


export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {
        whole,
        event,
        retain,
        portrait,
    },
});
