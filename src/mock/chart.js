import Mock from 'mockjs';

const getChartData = Mock.mock({
    data: [
        {
            userGroup: '所有用户',
            'list|1': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                '05-03|100-400': 75,
                '05-04|100-400': 75,
                '05-05|100-400': 75,
                '05-06|100-400': 75,
            }],
        },
        {
            userGroup: '活跃用户',
            'list|1': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                '05-03|100-400': 75,
                '05-04|100-400': 75,
                '05-05|100-400': 75,
                '05-06|100-400': 75,
            }],
        },
    ],
});

const updateEvent = Mock.mock({
    msg: '修改事件成功',
    code: '200',
});
const addEvent = Mock.mock({
    msg: '添加事件成功',
    code: '200',
});
export { getChartData, updateEvent, addEvent };
