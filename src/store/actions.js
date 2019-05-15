import { getData } from '../api/chart';

const action = {
    changeChartData({ state, commit }, condition) {
        state[condition.page].isLoading = true;
        // 请求数据的接口
        getData().then((res) => {
            commit('changeChartData', {
                page: condition.page,
                value: res.data.data,
            });
            console.log(res.data.data);
            state[condition.page].isLoading = false;
        });
    },
};


export default action;
