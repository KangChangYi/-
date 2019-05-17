/* eslint-disable no-restricted-syntax */
// import { getData } from '../api/chart';

import wholeChartData from './data/wholeChartData';

const action = {
    changeChartData({ state, commit }, condition) {
        state[condition.page].isLoading = true;
        // 请求数据的接口
        // getData().then((res) => {
        // commit('changeChartData', {
        //     page: condition.page,
        //     value: res.data.data,
        // });
        //     console.log(res.data.data);
        //     state[condition.page].isLoading = false;
        // });

        // 过滤 wholeChartData 中的数据
        const { value } = condition;
        const Data = wholeChartData;
        const chartData = [];
        // value.userGroup.forEach((v1) => {
        for (const n of value.userGroup) {
            // 用户群
            let t1;
            for (const i of Data) {
                if (i.userGroup === n) {
                    t1 = i;
                }
            }
            // const temp = Data.find(v2 => v2.userGroup === v1);
            // 指标
            let t2;
            for (const j of t1.quota) {
                if (j.name === value.quota) {
                    t2 = j;
                }
            }
            // temp.quota = temp.quota.find(v3 => v3.name === value.quota);
            // // 属性
            let t3;
            if (value.attribute) {
                for (const m of t1.attribute) {
                    if (m.name === value.attribute) {
                        t3 = m;
                    }
                }
            } else {
                t3 = false;
            }
            chartData.push({ userGroup: n, quota: t2, attribute: t3 });
            console.log(chartData);
        }
        // });
        setTimeout(() => {
            commit('changeChartData', {
                page: condition.page,
                value: chartData,
            });
            state[condition.page].isLoading = false;
        }, 500);
    },
};


export default action;
