import Mock from 'mockjs';

const { Random } = Mock;


const getChartData = function () {
    return Mock.mock({
        data: [
            {
                userGroup: '所有用户',
                index: '新增用户',
                attribute: '',
                list: {
                    '05-6': Random.integer(100, 700),
                    '05-7': Random.integer(100, 700),
                    '05-8': Random.integer(100, 700),
                    '05-9': Random.integer(100, 700),
                    '05-10': Random.integer(100, 700),
                    '05-11': Random.integer(100, 700),
                    '05-12': Random.integer(100, 700),
                },
            },
            {
                userGroup: '已注册用户',
                index: '新增用户',
                attribute: '',
                list: {
                    // 属性 id 是一个自增数，起始值为 1，每次增 1
                    '05-6': Random.integer(100, 700),
                    '05-7': Random.integer(100, 700),
                    '05-8': Random.integer(100, 700),
                    '05-9': Random.integer(100, 700),
                    '05-10': Random.integer(100, 700),
                    '05-11': Random.integer(100, 700),
                    '05-12': Random.integer(100, 700),
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
