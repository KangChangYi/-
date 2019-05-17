import Mock from 'mockjs';

const { Random } = Mock;

const getChartData = function () {
    return Mock.mock({
        data: [{
            userGroup: '所有用户',
            // 指标
            index: [{
                name: '新增用户',
                list: {
                    '05-14': Random.integer(100, 700),
                    '05-15': Random.integer(100, 700),
                    '05-16': Random.integer(100, 700),
                    '05-17': Random.integer(100, 700),
                    '05-18': Random.integer(100, 700),
                    '05-19': Random.integer(100, 700),
                    '05-20': Random.integer(100, 700),
                },
            }, {
                name: '活跃用户',
                list: {
                    '05-14': Random.integer(100, 700),
                    '05-15': Random.integer(100, 700),
                    '05-16': Random.integer(100, 700),
                    '05-17': Random.integer(100, 700),
                    '05-18': Random.integer(100, 700),
                    '05-19': Random.integer(100, 700),
                    '05-20': Random.integer(100, 700),
                },
            }, {
                name: '沉默用户',
                list: {
                    '05-14': Random.integer(100, 700),
                    '05-15': Random.integer(100, 700),
                    '05-16': Random.integer(100, 700),
                    '05-17': Random.integer(100, 700),
                    '05-18': Random.integer(100, 700),
                    '05-19': Random.integer(100, 700),
                    '05-20': Random.integer(100, 700),
                },
            }, {
                name: '访问次数',
                list: {
                    '05-14': Random.integer(100, 200),
                    '05-15': Random.integer(100, 200),
                    '05-16': Random.integer(100, 200),
                    '05-17': Random.integer(100, 200),
                    '05-18': Random.integer(100, 200),
                    '05-19': Random.integer(100, 200),
                    '05-20': Random.integer(100, 200),
                },
            }],
            // 属性
            attribute: [{
                name: '省份',
                list: {
                    '05-14': Random.integer(100, 700),
                    '05-15': Random.integer(100, 700),
                    '05-16': Random.integer(100, 700),
                    '05-17': Random.integer(100, 700),
                    '05-18': Random.integer(100, 700),
                    '05-19': Random.integer(100, 700),
                    '05-20': Random.integer(100, 700),
                },
            },
            {
                name: '浏览器品牌',
                list: {
                    '05-14': Random.integer(100, 700),
                    '05-15': Random.integer(100, 700),
                    '05-16': Random.integer(100, 700),
                    '05-17': Random.integer(100, 700),
                    '05-18': Random.integer(100, 700),
                    '05-19': Random.integer(100, 700),
                    '05-20': Random.integer(100, 700),
                },
            }],
            list: {
                '05-14': Random.integer(100, 700),
                '05-15': Random.integer(100, 700),
                '05-16': Random.integer(100, 700),
                '05-17': Random.integer(100, 700),
                '05-18': Random.integer(100, 700),
                '05-19': Random.integer(100, 700),
                '05-20': Random.integer(100, 700),
            },
        },
        {
            userGroup: '最近 7 天付款用户',
            // 指标
            index: [{
                name: '新增用户',
                list: {
                    '05-14': Random.integer(100, 700),
                    '05-15': Random.integer(100, 700),
                    '05-16': Random.integer(100, 700),
                    '05-17': Random.integer(100, 700),
                    '05-18': Random.integer(100, 700),
                    '05-19': Random.integer(100, 700),
                    '05-20': Random.integer(100, 700),
                },
            }, {
                name: '活跃用户',
                list: {
                    '05-14': Random.integer(100, 700),
                    '05-15': Random.integer(100, 700),
                    '05-16': Random.integer(100, 700),
                    '05-17': Random.integer(100, 700),
                    '05-18': Random.integer(100, 700),
                    '05-19': Random.integer(100, 700),
                    '05-20': Random.integer(100, 700),
                },
            }, {
                name: '沉默用户',
                list: {
                    '05-14': Random.integer(100, 700),
                    '05-15': Random.integer(100, 700),
                    '05-16': Random.integer(100, 700),
                    '05-17': Random.integer(100, 700),
                    '05-18': Random.integer(100, 700),
                    '05-19': Random.integer(100, 700),
                    '05-20': Random.integer(100, 700),
                },
            }, {
                name: '访问次数',
                list: {
                    '05-14': Random.integer(100, 200),
                    '05-15': Random.integer(100, 200),
                    '05-16': Random.integer(100, 200),
                    '05-17': Random.integer(100, 200),
                    '05-18': Random.integer(100, 200),
                    '05-19': Random.integer(100, 200),
                    '05-20': Random.integer(100, 200),
                },
            }],
            // 属性
            attribute: [{
                name: '省份',
                list: {
                    '05-14': Random.integer(100, 700),
                    '05-15': Random.integer(100, 700),
                    '05-16': Random.integer(100, 700),
                    '05-17': Random.integer(100, 700),
                    '05-18': Random.integer(100, 700),
                    '05-19': Random.integer(100, 700),
                    '05-20': Random.integer(100, 700),
                },
            },
            {
                name: '浏览器品牌',
                list: {
                    '05-14': Random.integer(100, 700),
                    '05-15': Random.integer(100, 700),
                    '05-16': Random.integer(100, 700),
                    '05-17': Random.integer(100, 700),
                    '05-18': Random.integer(100, 700),
                    '05-19': Random.integer(100, 700),
                    '05-20': Random.integer(100, 700),
                },
            }],
            list: {
                '05-14': Random.integer(100, 700),
                '05-15': Random.integer(100, 700),
                '05-16': Random.integer(100, 700),
                '05-17': Random.integer(100, 700),
                '05-18': Random.integer(100, 700),
                '05-19': Random.integer(100, 700),
                '05-20': Random.integer(100, 700),
            },
        },
        {
            userGroup: '活跃用户',
            // 指标
            index: [{
                name: '新增用户',
                list: {
                    '05-14': Random.integer(100, 700),
                    '05-15': Random.integer(100, 700),
                    '05-16': Random.integer(100, 700),
                    '05-17': Random.integer(100, 700),
                    '05-18': Random.integer(100, 700),
                    '05-19': Random.integer(100, 700),
                    '05-20': Random.integer(100, 700),
                },
            }, {
                name: '活跃用户',
                list: {
                    '05-14': Random.integer(100, 700),
                    '05-15': Random.integer(100, 700),
                    '05-16': Random.integer(100, 700),
                    '05-17': Random.integer(100, 700),
                    '05-18': Random.integer(100, 700),
                    '05-19': Random.integer(100, 700),
                    '05-20': Random.integer(100, 700),
                },
            }, {
                name: '沉默用户',
                list: {
                    '05-14': Random.integer(100, 700),
                    '05-15': Random.integer(100, 700),
                    '05-16': Random.integer(100, 700),
                    '05-17': Random.integer(100, 700),
                    '05-18': Random.integer(100, 700),
                    '05-19': Random.integer(100, 700),
                    '05-20': Random.integer(100, 700),
                },
            }, {
                name: '访问次数',
                list: {
                    '05-14': Random.integer(100, 200),
                    '05-15': Random.integer(100, 200),
                    '05-16': Random.integer(100, 200),
                    '05-17': Random.integer(100, 200),
                    '05-18': Random.integer(100, 200),
                    '05-19': Random.integer(100, 200),
                    '05-20': Random.integer(100, 200),
                },
            }],
            // 属性
            attribute: [{
                name: '省份',
                list: {
                    '05-14': Random.integer(100, 700),
                    '05-15': Random.integer(100, 700),
                    '05-16': Random.integer(100, 700),
                    '05-17': Random.integer(100, 700),
                    '05-18': Random.integer(100, 700),
                    '05-19': Random.integer(100, 700),
                    '05-20': Random.integer(100, 700),
                },
            },
            {
                name: '浏览器品牌',
                list: {
                    '05-14': Random.integer(100, 700),
                    '05-15': Random.integer(100, 700),
                    '05-16': Random.integer(100, 700),
                    '05-17': Random.integer(100, 700),
                    '05-18': Random.integer(100, 700),
                    '05-19': Random.integer(100, 700),
                    '05-20': Random.integer(100, 700),
                },
            }],
            list: {
                '05-14': Random.integer(100, 700),
                '05-15': Random.integer(100, 700),
                '05-16': Random.integer(100, 700),
                '05-17': Random.integer(100, 700),
                '05-18': Random.integer(100, 700),
                '05-19': Random.integer(100, 700),
                '05-20': Random.integer(100, 700),
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
