const mutations = {
    changeChartData(state, payload) {
        const { page, value } = payload;
        if (page) {
            state[page].chartData = value;
        }
    },
    changeUserGroup(state, payload) {
        const { page, value } = payload;
        if (page) {
            state[page].userGroup = value;
        }
    },
    changeIndex(state, payload) {
        const { page, value } = payload;
        if (page) {
            state[page].index = value;
        }
    },
    changeAttribute(state, payload) {
        const { page, value } = payload;
        if (page) {
            state[page].attribute = value;
        }
    },
    changeDate(state, payload) {
        const { page, value } = payload;
        if (page) {
            state[page].date = value;
        }
    },
    changeChartType(state, payload) {
        const { page, value } = payload;
        if (page) {
            state[page].chartType = value;
        }
    },
    addUserGroup(state, payload) {
        state.userGroup.push({ enable: '已启用', value: payload, number: Math.floor(Math.random() * 1000 + 200) });
    },
};

export default mutations;
