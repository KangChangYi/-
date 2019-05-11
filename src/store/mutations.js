const mutations = {
    // changeChartData(state, payload) {
    //     const { page, value } = payload;
    //     if (page) {
    //         state[page].chartData = value;
    //     }
    // },
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
};

export default mutations;
