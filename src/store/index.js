import Vue from 'vue';

import Vuex from 'vuex';

import mutations from './mutations';

// 整体分析
import whole from './modules/whole';

Vue.use(Vuex);

const state = {
    isLogin: true,
    userName: 'test',
    passWord: 'test',
};

export default new Vuex.Store({
    state,
    mutations,
    modules: {
        whole,
    },
});
