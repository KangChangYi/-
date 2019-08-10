

import Mock from 'mockjs';

const { Random } = Mock;

const getWholeChartData = function () {
    return Mock.mock([{
        userGroup: '上海的用户',
        // 指标
        quota: [{
            name: '登录',
            list: {
                '06-10': Random.natural(500, 1000),
                '06-11': Random.natural(500, 1000),
                '06-12': Random.natural(500, 1000),
                '06-13': Random.natural(500, 1000),
                '06-14': Random.natural(500, 1000),
                '06-15': Random.natural(500, 1000),
                '06-16': Random.natural(500, 1000),
            },
        }, {
            name: '注册-开始注册',
            list: {
                '06-10': Random.natural(200, 400),
                '06-11': Random.natural(200, 400),
                '06-12': Random.natural(200, 400),
                '06-13': Random.natural(200, 400),
                '06-14': Random.natural(200, 400),
                '06-15': Random.natural(200, 400),
                '06-16': Random.natural(200, 400),
            },
        }, {
            name: '注册-完成注册',
            list: {
                '06-10': Random.natural(150, 300),
                '06-11': Random.natural(150, 300),
                '06-12': Random.natural(150, 300),
                '06-13': Random.natural(150, 300),
                '06-14': Random.natural(150, 300),
                '06-15': Random.natural(150, 300),
                '06-16': Random.natural(150, 300),
            },
        }, {
            name: '搜索',
            list: {
                '06-10': Random.natural(2000, 8000),
                '06-11': Random.natural(2000, 8000),
                '06-12': Random.natural(2000, 8000),
                '06-13': Random.natural(2000, 8000),
                '06-14': Random.natural(2000, 8000),
                '06-15': Random.natural(2000, 8000),
                '06-16': Random.natural(2000, 8000),
            },
        }],
        // 属性
        attribute: [{
            name: '省份',
            list: {
                '06-10': [{ name: '上海', number: Random.natural(200, 400) }, { name: '浙江', number: Random.natural(200, 300) }, { name: '广东', number: Random.natural(100, 180) }, { name: '江苏', number: Random.natural(50, 120) }, { name: '深圳', number: Random.natural(20, 150) }],
                '06-11': [{ name: '上海', number: Random.natural(200, 400) }, { name: '浙江', number: Random.natural(200, 300) }, { name: '广东', number: Random.natural(100, 180) }, { name: '江苏', number: Random.natural(50, 120) }, { name: '深圳', number: Random.natural(20, 150) }],
                '06-12': [{ name: '浙江', number: Random.natural(200, 400) }, { name: '上海', number: Random.natural(200, 300) }, { name: '江苏', number: Random.natural(100, 180) }, { name: '广东', number: Random.natural(50, 120) }, { name: '深圳', number: Random.natural(20, 150) }],
                '06-13': [{ name: '浙江', number: Random.natural(200, 400) }, { name: '上海', number: Random.natural(200, 300) }, { name: '广东', number: Random.natural(100, 180) }, { name: '江苏', number: Random.natural(50, 120) }, { name: '深圳', number: Random.natural(20, 150) }],
                '06-14': [{ name: '上海', number: Random.natural(200, 400) }, { name: '浙江', number: Random.natural(200, 300) }, { name: '江苏', number: Random.natural(100, 180) }, { name: '广东', number: Random.natural(50, 120) }, { name: '深圳', number: Random.natural(20, 150) }],
                '06-15': [{ name: '浙江', number: Random.natural(200, 400) }, { name: '上海', number: Random.natural(200, 300) }, { name: '江苏', number: Random.natural(100, 180) }, { name: '广东', number: Random.natural(50, 120) }, { name: '深圳', number: Random.natural(20, 150) }],
                '06-16': [{ name: '浙江', number: Random.natural(200, 400) }, { name: '上海', number: Random.natural(200, 300) }, { name: '广东', number: Random.natural(100, 180) }, { name: '江苏', number: Random.natural(50, 120) }, { name: '深圳', number: Random.natural(20, 150) }],
            },
        },
        {
            name: '城市',
            list: {
                '06-10': [{ name: '上海', number: Random.natural(150, 350) }, { name: '杭州', number: Random.natural(150, 200) }, { name: '广州', number: Random.natural(100, 180) }, { name: '南昌', number: Random.natural(50, 120) }, { name: '深圳', number: Random.natural(20, 150) }],
                '06-11': [{ name: '上海', number: Random.natural(150, 350) }, { name: '杭州', number: Random.natural(150, 200) }, { name: '广州', number: Random.natural(100, 180) }, { name: '南昌', number: Random.natural(50, 120) }, { name: '深圳', number: Random.natural(20, 150) }],
                '06-12': [{ name: '杭州', number: Random.natural(150, 350) }, { name: '上海', number: Random.natural(150, 200) }, { name: '南昌', number: Random.natural(100, 180) }, { name: '广州', number: Random.natural(50, 120) }, { name: '深圳', number: Random.natural(20, 150) }],
                '06-13': [{ name: '杭州', number: Random.natural(150, 350) }, { name: '上海', number: Random.natural(150, 200) }, { name: '广州', number: Random.natural(100, 180) }, { name: '南昌', number: Random.natural(50, 120) }, { name: '深圳', number: Random.natural(20, 150) }],
                '06-14': [{ name: '上海', number: Random.natural(150, 350) }, { name: '杭州', number: Random.natural(150, 200) }, { name: '南昌', number: Random.natural(100, 180) }, { name: '广州', number: Random.natural(50, 120) }, { name: '深圳', number: Random.natural(20, 150) }],
                '06-15': [{ name: '杭州', number: Random.natural(150, 350) }, { name: '上海', number: Random.natural(150, 200) }, { name: '南昌', number: Random.natural(100, 180) }, { name: '广州', number: Random.natural(50, 120) }, { name: '深圳', number: Random.natural(20, 150) }],
                '06-16': [{ name: '杭州', number: Random.natural(150, 350) }, { name: '上海', number: Random.natural(150, 200) }, { name: '广州', number: Random.natural(100, 180) }, { name: '南昌', number: Random.natural(50, 120) }, { name: '深圳', number: Random.natural(20, 150) }],
            },
        },
        {
            name: '来源域名',
            list: {
                '06-10': [{ name: 'www.baidu.com', number: Random.natural(500, 700) }, { name: 'www.sogou.com', number: Random.natural(100, 300) }, { name: 'www.51jrq.com', number: Random.natural(70, 200) }],
                '06-11': [{ name: 'www.baidu.com', number: Random.natural(500, 700) }, { name: 'www.sogou.com', number: Random.natural(100, 300) }, { name: 'www.51jrq.com', number: Random.natural(70, 200) }],
                '06-12': [{ name: 'www.baidu.com', number: Random.natural(500, 700) }, { name: 'www.sogou.com', number: Random.natural(100, 300) }, { name: 'www.51jrq.com', number: Random.natural(70, 200) }],
                '06-13': [{ name: 'www.baidu.com', number: Random.natural(500, 700) }, { name: 'www.sogou.com', number: Random.natural(100, 300) }, { name: 'www.51jrq.com', number: Random.natural(70, 200) }],
                '06-14': [{ name: 'www.baidu.com', number: Random.natural(500, 700) }, { name: 'www.sogou.com', number: Random.natural(100, 300) }, { name: 'www.51jrq.com', number: Random.natural(70, 200) }],
                '06-15': [{ name: 'www.baidu.com', number: Random.natural(500, 700) }, { name: 'www.sogou.com', number: Random.natural(100, 300) }, { name: 'www.51jrq.com', number: Random.natural(70, 200) }],
                '06-16': [{ name: 'www.baidu.com', number: Random.natural(500, 700) }, { name: 'www.sogou.com', number: Random.natural(100, 300) }, { name: 'www.51jrq.com', number: Random.natural(70, 200) }],
            },
        },
        {
            name: '浏览器品牌',
            list: {
                '06-10': [{ name: '360', number: Random.natural(500, 700) }, { name: 'IE', number: Random.natural(100, 400) }, { name: 'Firefox', number: Random.natural(50, 200) }],
                '06-11': [{ name: '360', number: Random.natural(500, 700) }, { name: 'IE', number: Random.natural(100, 400) }, { name: 'Firefox', number: Random.natural(50, 200) }],
                '06-12': [{ name: '360', number: Random.natural(500, 700) }, { name: 'IE', number: Random.natural(100, 400) }, { name: 'Firefox', number: Random.natural(50, 200) }],
                '06-13': [{ name: '360', number: Random.natural(500, 700) }, { name: 'IE', number: Random.natural(100, 400) }, { name: 'Firefox', number: Random.natural(50, 200) }],
                '06-14': [{ name: '360', number: Random.natural(500, 700) }, { name: 'IE', number: Random.natural(100, 400) }, { name: 'Firefox', number: Random.natural(50, 200) }],
                '06-15': [{ name: '360', number: Random.natural(500, 700) }, { name: 'IE', number: Random.natural(100, 400) }, { name: 'Firefox', number: Random.natural(50, 200) }],
                '06-16': [{ name: '360', number: Random.natural(500, 700) }, { name: 'IE', number: Random.natural(100, 400) }, { name: 'Firefox', number: Random.natural(50, 200) }],
            },
        },
        ],
    }]);
};

const getEventChartData = function () {
    return Mock.mock({ });
};

export { getWholeChartData, getEventChartData };
