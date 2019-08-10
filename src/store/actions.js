/* eslint-disable no-restricted-syntax */
// import { getData } from '../api/chart';

import wholeChartData from './data/wholeChartData';
import eventChartData from './data/eventChartData';
import retainChartData from './data/retainChartData';

const dataMap = new Map()
    .set('whole', wholeChartData)
    .set('event', eventChartData)
    .set('retain', retainChartData);

const action = {
    changeChartData({ state, commit }, condition) {
        state[condition.page].isLoading = true;

        const { value } = condition;

        const Data = dataMap.get(condition.page);
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
            for (const i of t1.quota) {
                if (i.name === value.quota) {
                    t2 = i;
                }
            }
            const startDate = new Date(condition.value.date[0]).getTime();
            const endDate = new Date(condition.value.date[1]).getTime();
            // 过滤日期
            t2 = JSON.parse(JSON.stringify(t2));
            for (const i of Object.keys(t2.list)) {
                const date = new Date(`2019-${i}`).getTime();
                if (date < startDate || date > endDate) {
                    delete t2.list[i];
                }
            }

            // temp.quota = temp.quota.find(v3 => v3.name === value.quota);
            // // 属性
            let t3;
            if (value.attribute) {
                for (const i of t1.attribute) {
                    if (i.name === value.attribute) {
                        t3 = i;
                    }
                }
            } else {
                t3 = false;
            }
            // 过滤日期
            if (t3) {
                t3 = JSON.parse(JSON.stringify(t3));
                for (const i of Object.keys(t3.list)) {
                    const date = new Date(`2019-${i}`).getTime();
                    if (date < startDate || date > endDate) {
                        delete t3.list[i];
                    }
                }
            }
            chartData.push({ userGroup: n, quota: t2, attribute: t3 });
        }
        // });
        setTimeout(() => {
            commit('changeChartData', {
                page: condition.page,
                value: chartData,
            });
            state[condition.page].isLoading = false;
        }, 2000);
    },
};


export default action;
