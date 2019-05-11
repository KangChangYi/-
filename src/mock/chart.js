import Mock from 'mockjs';

const { Random } = Mock;


const getChartData = function () {
    return Mock.mock({
        data: [
            {
                userGroup: '所有用户',
                list: {
                    // 属性 id 是一个自增数，起始值为 1，每次增 1
                    '05-03': Random.integer(0, 1000),
                    '05-04': Random.integer(0, 1000),
                    '05-05': Random.integer(0, 1000),
                    '05-06': Random.integer(0, 1000),
                },
            },
            {
                userGroup: '活跃用户',
                list: {
                    // 属性 id 是一个自增数，起始值为 1，每次增 1
                    '05-03': Random.integer(0, 1000),
                    '05-04': Random.integer(0, 1000),
                    '05-05': Random.integer(0, 1000),
                    '05-06': Random.integer(0, 1000),
                },
            },
        ],
    });
};


const updateEvent = Mock.mock({
    msg: '修改事件成功',
    code: '200',
});
const addEvent = Mock.mock({
    msg: '添加事件成功',
    code: '200',
});
export { getChartData, updateEvent, addEvent };
