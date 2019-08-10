export default [{
    userGroup: '所有用户',
    // 指标
    quota: [{
        name: '新增用户',
        list: {
            '06-10': 212,
            '06-11': 256,
            '06-12': 312,
            '06-13': 231,
            '06-14': 193,
            '06-15': 184,
            '06-16': 175,
        },
    }, {
        name: '活跃用户',
        list: {
            '06-10': 2324,
            '06-11': 2455,
            '06-12': 2185,
            '06-13': 1750,
            '06-14': 1902,
            '06-15': 2542,
            '06-16': 2203,
        },
    }, {
        name: '沉默用户',
        list: {
            '06-10': 4120,
            '06-11': 3901,
            '06-12': 4232,
            '06-13': 4430,
            '06-14': 4230,
            '06-15': 4520,
            '06-16': 3709,
        },
    }, {
        name: '访问次数',
        list: {
            '06-10': 3420,
            '06-11': 3640,
            '06-12': 3120,
            '06-13': 3420,
            '06-14': 4520,
            '06-15': 4240,
            '06-16': 3849,
        },
    }],
    // 属性
    attribute: [{
        name: '省份',
        list: {
            '06-10': [{ name: '上海', number: 120 }, { name: '浙江', number: 34 }, { name: '广东', number: 32 }, { name: '江苏', number: 12 }, { name: '深圳', number: 12 }],
            '06-11': [{ name: '上海', number: 132 }, { name: '浙江', number: 42 }, { name: '广东', number: 22 }, { name: '江苏', number: 6 }, { name: '深圳', number: 32 }],
            '06-12': [{ name: '浙江', number: 124 }, { name: '上海', number: 34 }, { name: '江苏', number: 16 }, { name: '广东', number: 21 }, { name: '深圳', number: 12 }],
            '06-13': [{ name: '浙江', number: 150 }, { name: '上海', number: 62 }, { name: '广东', number: 42 }, { name: '江苏', number: 12 }, { name: '深圳', number: 21 }],
            '06-14': [{ name: '上海', number: 112 }, { name: '浙江', number: 41 }, { name: '江苏', number: 20 }, { name: '广东', number: 21 }, { name: '深圳', number: 23 }],
            '06-15': [{ name: '浙江', number: 140 }, { name: '上海', number: 52 }, { name: '江苏', number: 12 }, { name: '广东', number: 11 }, { name: '深圳', number: 7 }],
            '06-16': [{ name: '浙江', number: 114 }, { name: '上海', number: 35 }, { name: '广东', number: 29 }, { name: '江苏', number: 31 }, { name: '深圳', number: 9 }],
        },
    },
    {
        name: '城市',
        list: {
            '06-10': [{ name: '上海', number: 120 }, { name: '杭州', number: 24 }, { name: '广州', number: 22 }, { name: '南昌', number: 8 }, { name: '深圳', number: 12 }],
            '06-11': [{ name: '上海', number: 132 }, { name: '杭州', number: 22 }, { name: '广州', number: 12 }, { name: '南昌', number: 3 }, { name: '深圳', number: 32 }],
            '06-12': [{ name: '杭州', number: 84 }, { name: '上海', number: 34 }, { name: '南昌', number: 6 }, { name: '广州', number: 12 }, { name: '深圳', number: 12 }],
            '06-13': [{ name: '杭州', number: 70 }, { name: '上海', number: 62 }, { name: '广州', number: 22 }, { name: '南昌', number: 5 }, { name: '深圳', number: 21 }],
            '06-14': [{ name: '上海', number: 112 }, { name: '杭州', number: 21 }, { name: '南昌', number: 9 }, { name: '广州', number: 12 }, { name: '深圳', number: 23 }],
            '06-15': [{ name: '杭州', number: 110 }, { name: '上海', number: 52 }, { name: '南昌', number: 5 }, { name: '广州', number: 5 }, { name: '深圳', number: 7 }],
            '06-16': [{ name: '杭州', number: 94 }, { name: '上海', number: 35 }, { name: '广州', number: 19 }, { name: '南昌', number: 22 }, { name: '深圳', number: 9 }],
        },
    },
    {
        name: '来源域名',
        list: {
            '06-10': [{ name: 'www.baidu.com', number: 120 }, { name: 'www.sogou.com', number: 42 }, { name: 'www.51jrq.com', number: 12 }],
            '06-11': [{ name: 'www.baidu.com', number: 147 }, { name: 'www.sogou.com', number: 31 }, { name: 'www.51jrq.com', number: 21 }],
            '06-12': [{ name: 'www.baidu.com', number: 170 }, { name: 'www.sogou.com', number: 24 }, { name: 'www.51jrq.com', number: 14 }],
            '06-13': [{ name: 'www.baidu.com', number: 160 }, { name: 'www.sogou.com', number: 36 }, { name: 'www.51jrq.com', number: 18 }],
            '06-14': [{ name: 'www.baidu.com', number: 129 }, { name: 'www.sogou.com', number: 18 }, { name: 'www.51jrq.com', number: 25 }],
            '06-15': [{ name: 'www.baidu.com', number: 112 }, { name: 'www.sogou.com', number: 27 }, { name: 'www.51jrq.com', number: 30 }],
            '06-16': [{ name: 'www.baidu.com', number: 120 }, { name: 'www.sogou.com', number: 21 }, { name: 'www.51jrq.com', number: 23 }],
        },
    },
    {
        name: '浏览器品牌',
        list: {
            '06-10': [{ name: '360', number: 150 }, { name: 'IE', number: 23 }, { name: 'Firefox', number: 12 }],
            '06-11': [{ name: '360', number: 122 }, { name: 'IE', number: 35 }, { name: 'Firefox', number: 21 }],
            '06-12': [{ name: '360', number: 187 }, { name: 'IE', number: 17 }, { name: 'Firefox', number: 27 }],
            '06-13': [{ name: '360', number: 152 }, { name: 'IE', number: 24 }, { name: 'Firefox', number: 21 }],
            '06-14': [{ name: '360', number: 126 }, { name: 'IE', number: 25 }, { name: 'Firefox', number: 12 }],
            '06-15': [{ name: '360', number: 172 }, { name: 'IE', number: 36 }, { name: 'Firefox', number: 24 }],
            '06-16': [{ name: '360', number: 12 }, { name: 'IE', number: 26 }, { name: 'Firefox', number: 12 }],
        },
    },
    ],
},
{
    userGroup: '最近7天付款用户',
    quota: [{
        name: '新增用户',
        list: {
            '06-10': 88, '06-11': 77, '06-12': 92, '06-13': 64, '06-14': 82, '06-15': 25, '06-16': 35,
        },
    }, {
        name: '活跃用户',
        list: {
            '06-10': 1299, '06-11': 1460, '06-12': 1198, '06-13': 1279, '06-14': 1073, '06-15': 1340, '06-16': 1235,
        },
    }, {
        name: '沉默用户',
        list: {
            '06-10': 24, '06-11': 65, '06-12': 3, '06-13': 68, '06-14': 42, '06-15': 21, '06-16': 66,
        },
    }, {
        name: '访问次数',
        list: {
            '06-10': 1538, '06-11': 1986, '06-12': 2058, '06-13': 1501, '06-14': 1696, '06-15': 1558, '06-16': 1500,
        },
    }],
    attribute: [{
        name: '省份',
        list: {
            '06-10': [{ name: '上海', number: 539 }, { name: '浙江', number: 203 }, { name: '广东', number: 192 }, { name: '江苏', number: 188 }, { name: '深圳', number: 35 }], '06-11': [{ name: '上海', number: 518 }, { name: '浙江', number: 377 }, { name: '广东', number: 270 }, { name: '江苏', number: 116 }, { name: '深圳', number: 98 }], '06-12': [{ name: '浙江', number: 660 }, { name: '上海', number: 445 }, { name: '江苏', number: 267 }, { name: '广东', number: 74 }, { name: '深圳', number: 75 }], '06-13': [{ name: '浙江', number: 536 }, { name: '上海', number: 333 }, { name: '广东', number: 230 }, { name: '江苏', number: 104 }, { name: '深圳', number: 54 }], '06-14': [{ name: '上海', number: 668 }, { name: '浙江', number: 240 }, { name: '江苏', number: 144 }, { name: '广东', number: 197 }, { name: '深圳', number: 76 }], '06-15': [{ name: '浙江', number: 587 }, { name: '上海', number: 453 }, { name: '江苏', number: 212 }, { name: '广东', number: 200 }, { name: '深圳', number: 74 }], '06-16': [{ name: '浙江', number: 555 }, { name: '上海', number: 369 }, { name: '广东', number: 296 }, { name: '江苏', number: 71 }, { name: '深圳', number: 31 }],
        },
    }, {
        name: '城市',
        list: {
            '06-10': [{ name: '上海', number: 98 }, { name: '杭州', number: 33 }, { name: '广州', number: 14 }, { name: '南昌', number: 23 }, { name: '深圳', number: 10 }], '06-11': [{ name: '上海', number: 58 }, { name: '杭州', number: 50 }, { name: '广州', number: 39 }, { name: '南昌', number: 21 }, { name: '深圳', number: 17 }], '06-12': [{ name: '杭州', number: 100 }, { name: '上海', number: 35 }, { name: '南昌', number: 28 }, { name: '广州', number: 26 }, { name: '深圳', number: 10 }], '06-13': [{ name: '杭州', number: 93 }, { name: '上海', number: 49 }, { name: '广州', number: 29 }, { name: '南昌', number: 26 }, { name: '深圳', number: 20 }], '06-14': [{ name: '上海', number: 79 }, { name: '杭州', number: 58 }, { name: '南昌', number: 20 }, { name: '广州', number: 14 }, { name: '深圳', number: 14 }], '06-15': [{ name: '杭州', number: 79 }, { name: '上海', number: 33 }, { name: '南昌', number: 28 }, { name: '广州', number: 21 }, { name: '深圳', number: 19 }], '06-16': [{ name: '杭州', number: 76 }, { name: '上海', number: 23 }, { name: '广州', number: 15 }, { name: '南昌', number: 18 }, { name: '深圳', number: 13 }],
        },
    }, {
        name: '来源域名',
        list: {
            '06-10': [{ name: 'www.baidu.com', number: 545 }, { name: 'www.sogou.com', number: 152 }, { name: 'www.51jrq.com', number: 102 }], '06-11': [{ name: 'www.baidu.com', number: 548 }, { name: 'www.sogou.com', number: 131 }, { name: 'www.51jrq.com', number: 126 }], '06-12': [{ name: 'www.baidu.com', number: 625 }, { name: 'www.sogou.com', number: 278 }, { name: 'www.51jrq.com', number: 189 }], '06-13': [{ name: 'www.baidu.com', number: 618 }, { name: 'www.sogou.com', number: 170 }, { name: 'www.51jrq.com', number: 179 }], '06-14': [{ name: 'www.baidu.com', number: 610 }, { name: 'www.sogou.com', number: 170 }, { name: 'www.51jrq.com', number: 118 }], '06-15': [{ name: 'www.baidu.com', number: 667 }, { name: 'www.sogou.com', number: 145 }, { name: 'www.51jrq.com', number: 106 }], '06-16': [{ name: 'www.baidu.com', number: 536 }, { name: 'www.sogou.com', number: 218 }, { name: 'www.51jrq.com', number: 134 }],
        },
    }, {
        name: '浏览器品牌',
        list: {
            '06-10': [{ name: '360', number: 539 }, { name: 'IE', number: 386 }, { name: 'Firefox', number: 185 }], '06-11': [{ name: '360', number: 655 }, { name: 'IE', number: 226 }, { name: 'Firefox', number: 148 }], '06-12': [{ name: '360', number: 586 }, { name: 'IE', number: 298 }, { name: 'Firefox', number: 176 }], '06-13': [{ name: '360', number: 509 }, { name: 'IE', number: 201 }, { name: 'Firefox', number: 174 }], '06-14': [{ name: '360', number: 687 }, { name: 'IE', number: 306 }, { name: 'Firefox', number: 166 }], '06-15': [{ name: '360', number: 657 }, { name: 'IE', number: 198 }, { name: 'Firefox', number: 147 }], '06-16': [{ name: '360', number: 667 }, { name: 'IE', number: 368 }, { name: 'Firefox', number: 192 }],
        },
    }],
},
{
    userGroup: '7天内活跃用户',
    quota: [{
        name: '新增用户',
        list: {
            '06-10': 56, '06-11': 21, '06-12': 79, '06-13': 55, '06-14': 67, '06-15': 63, '06-16': 32,
        },
    }, {
        name: '活跃用户',
        list: {
            '06-10': 1005, '06-11': 1091, '06-12': 1187, '06-13': 1259, '06-14': 1184, '06-15': 1490, '06-16': 1060,
        },
    }, {
        name: '沉默用户',
        list: {
            '06-10': 13, '06-11': 23, '06-12': 8, '06-13': 39, '06-14': 21, '06-15': 0, '06-16': 79,
        },
    }, {
        name: '访问次数',
        list: {
            '06-10': 1854, '06-11': 1640, '06-12': 1706, '06-13': 1922, '06-14': 1746, '06-15': 1723, '06-16': 1700,
        },
    }],
    attribute: [{
        name: '省份',
        list: {
            '06-10': [{ name: '上海', number: 607 }, { name: '浙江', number: 281 }, { name: '广东', number: 250 }, { name: '江苏', number: 122 }, { name: '深圳', number: 95 }], '06-11': [{ name: '上海', number: 676 }, { name: '浙江', number: 237 }, { name: '广东', number: 291 }, { name: '江苏', number: 109 }, { name: '深圳', number: 50 }], '06-12': [{ name: '浙江', number: 603 }, { name: '上海', number: 276 }, { name: '江苏', number: 262 }, { name: '广东', number: 150 }, { name: '深圳', number: 53 }], '06-13': [{ name: '浙江', number: 524 }, { name: '上海', number: 212 }, { name: '广东', number: 234 }, { name: '江苏', number: 127 }, { name: '深圳', number: 43 }], '06-14': [{ name: '上海', number: 677 }, { name: '浙江', number: 294 }, { name: '江苏', number: 272 }, { name: '广东', number: 52 }, { name: '深圳', number: 50 }], '06-15': [{ name: '浙江', number: 694 }, { name: '上海', number: 448 }, { name: '江苏', number: 123 }, { name: '广东', number: 158 }, { name: '深圳', number: 90 }], '06-16': [{ name: '浙江', number: 583 }, { name: '上海', number: 330 }, { name: '广东', number: 169 }, { name: '江苏', number: 115 }, { name: '深圳', number: 55 }],
        },
    }, {
        name: '城市',
        list: {
            '06-10': [{ name: '上海', number: 72 }, { name: '杭州', number: 48 }, { name: '广州', number: 22 }, { name: '南昌', number: 26 }, { name: '深圳', number: 11 }], '06-11': [{ name: '上海', number: 74 }, { name: '杭州', number: 55 }, { name: '广州', number: 27 }, { name: '南昌', number: 13 }, { name: '深圳', number: 12 }], '06-12': [{ name: '杭州', number: 76 }, { name: '上海', number: 21 }, { name: '南昌', number: 45 }, { name: '广州', number: 22 }, { name: '深圳', number: 12 }], '06-13': [{ name: '杭州', number: 85 }, { name: '上海', number: 25 }, { name: '广州', number: 45 }, { name: '南昌', number: 18 }, { name: '深圳', number: 10 }], '06-14': [{ name: '上海', number: 56 }, { name: '杭州', number: 29 }, { name: '南昌', number: 26 }, { name: '广州', number: 27 }, { name: '深圳', number: 16 }], '06-15': [{ name: '杭州', number: 78 }, { name: '上海', number: 39 }, { name: '南昌', number: 24 }, { name: '广州', number: 27 }, { name: '深圳', number: 14 }], '06-16': [{ name: '杭州', number: 95 }, { name: '上海', number: 62 }, { name: '广州', number: 40 }, { name: '南昌', number: 12 }, { name: '深圳', number: 13 }],
        },
    }, {
        name: '来源域名',
        list: {
            '06-10': [{ name: 'www.baidu.com', number: 512 }, { name: 'www.sogou.com', number: 150 }, { name: 'www.51jrq.com', number: 194 }], '06-11': [{ name: 'www.baidu.com', number: 506 }, { name: 'www.sogou.com', number: 195 }, { name: 'www.51jrq.com', number: 121 }], '06-12': [{ name: 'www.baidu.com', number: 508 }, { name: 'www.sogou.com', number: 231 }, { name: 'www.51jrq.com', number: 138 }], '06-13': [{ name: 'www.baidu.com', number: 515 }, { name: 'www.sogou.com', number: 165 }, { name: 'www.51jrq.com', number: 70 }], '06-14': [{ name: 'www.baidu.com', number: 526 }, { name: 'www.sogou.com', number: 197 }, { name: 'www.51jrq.com', number: 84 }], '06-15': [{ name: 'www.baidu.com', number: 604 }, { name: 'www.sogou.com', number: 237 }, { name: 'www.51jrq.com', number: 176 }], '06-16': [{ name: 'www.baidu.com', number: 658 }, { name: 'www.sogou.com', number: 233 }, { name: 'www.51jrq.com', number: 182 }],
        },
    }, {
        name: '浏览器品牌',
        list: {
            '06-10': [{ name: '360', number: 503 }, { name: 'IE', number: 305 }, { name: 'Firefox', number: 185 }], '06-11': [{ name: '360', number: 670 }, { name: 'IE', number: 184 }, { name: 'Firefox', number: 63 }], '06-12': [{ name: '360', number: 526 }, { name: 'IE', number: 303 }, { name: 'Firefox', number: 180 }], '06-13': [{ name: '360', number: 504 }, { name: 'IE', number: 268 }, { name: 'Firefox', number: 179 }], '06-14': [{ name: '360', number: 572 }, { name: 'IE', number: 340 }, { name: 'Firefox', number: 187 }], '06-15': [{ name: '360', number: 521 }, { name: 'IE', number: 340 }, { name: 'Firefox', number: 107 }], '06-16': [{ name: '360', number: 629 }, { name: 'IE', number: 271 }, { name: 'Firefox', number: 66 }],
        },
    }],
},
{
    userGroup: '余额100元以内用户',
    quota: [{
        name: '新增用户',
        list: {
            '06-10': 43, '06-11': 50, '06-12': 37, '06-13': 70, '06-14': 32, '06-15': 68, '06-16': 50,
        },
    }, {
        name: '活跃用户',
        list: {
            '06-10': 1010, '06-11': 1432, '06-12': 1379, '06-13': 1074, '06-14': 1306, '06-15': 1214, '06-16': 1093,
        },
    }, {
        name: '沉默用户',
        list: {
            '06-10': 41, '06-11': 23, '06-12': 31, '06-13': 91, '06-14': 19, '06-15': 33, '06-16': 12,
        },
    }, {
        name: '访问次数',
        list: {
            '06-10': 1663, '06-11': 1901, '06-12': 1895, '06-13': 2100, '06-14': 2022, '06-15': 1845, '06-16': 1595,
        },
    }],
    attribute: [{
        name: '省份',
        list: {
            '06-10': [{ name: '上海', number: 503 }, { name: '浙江', number: 340 }, { name: '广东', number: 200 }, { name: '江苏', number: 150 }, { name: '深圳', number: 76 }], '06-11': [{ name: '上海', number: 629 }, { name: '浙江', number: 487 }, { name: '广东', number: 265 }, { name: '江苏', number: 74 }, { name: '深圳', number: 44 }], '06-12': [{ name: '浙江', number: 637 }, { name: '上海', number: 409 }, { name: '江苏', number: 181 }, { name: '广东', number: 188 }, { name: '深圳', number: 67 }], '06-13': [{ name: '浙江', number: 538 }, { name: '上海', number: 490 }, { name: '广东', number: 134 }, { name: '江苏', number: 90 }, { name: '深圳', number: 80 }], '06-14': [{ name: '上海', number: 665 }, { name: '浙江', number: 246 }, { name: '江苏', number: 193 }, { name: '广东', number: 165 }, { name: '深圳', number: 98 }], '06-15': [{ name: '浙江', number: 539 }, { name: '上海', number: 210 }, { name: '江苏', number: 211 }, { name: '广东', number: 73 }, { name: '深圳', number: 75 }], '06-16': [{ name: '浙江', number: 693 }, { name: '上海', number: 351 }, { name: '广东', number: 134 }, { name: '江苏', number: 138 }, { name: '深圳', number: 39 }],
        },
    }, {
        name: '城市',
        list: {
            '06-10': [{ name: '上海', number: 78 }, { name: '杭州', number: 36 }, { name: '广州', number: 33 }, { name: '南昌', number: 16 }, { name: '深圳', number: 18 }], '06-11': [{ name: '上海', number: 78 }, { name: '杭州', number: 56 }, { name: '广州', number: 15 }, { name: '南昌', number: 15 }, { name: '深圳', number: 18 }], '06-12': [{ name: '杭州', number: 56 }, { name: '上海', number: 34 }, { name: '南昌', number: 31 }, { name: '广州', number: 24 }, { name: '深圳', number: 13 }], '06-13': [{ name: '杭州', number: 91 }, { name: '上海', number: 27 }, { name: '广州', number: 44 }, { name: '南昌', number: 28 }, { name: '深圳', number: 18 }], '06-14': [{ name: '上海', number: 84 }, { name: '杭州', number: 26 }, { name: '南昌', number: 35 }, { name: '广州', number: 20 }, { name: '深圳', number: 12 }], '06-15': [{ name: '杭州', number: 74 }, { name: '上海', number: 53 }, { name: '南昌', number: 39 }, { name: '广州', number: 11 }, { name: '深圳', number: 15 }], '06-16': [{ name: '杭州', number: 65 }, { name: '上海', number: 29 }, { name: '广州', number: 26 }, { name: '南昌', number: 16 }, { name: '深圳', number: 11 }],
        },
    }, {
        name: '来源域名',
        list: {
            '06-10': [{ name: 'www.baidu.com', number: 504 }, { name: 'www.sogou.com', number: 118 }, { name: 'www.51jrq.com', number: 168 }], '06-11': [{ name: 'www.baidu.com', number: 663 }, { name: 'www.sogou.com', number: 275 }, { name: 'www.51jrq.com', number: 83 }], '06-12': [{ name: 'www.baidu.com', number: 566 }, { name: 'www.sogou.com', number: 253 }, { name: 'www.51jrq.com', number: 117 }], '06-13': [{ name: 'www.baidu.com', number: 598 }, { name: 'www.sogou.com', number: 216 }, { name: 'www.51jrq.com', number: 185 }], '06-14': [{ name: 'www.baidu.com', number: 642 }, { name: 'www.sogou.com', number: 219 }, { name: 'www.51jrq.com', number: 197 }], '06-15': [{ name: 'www.baidu.com', number: 623 }, { name: 'www.sogou.com', number: 107 }, { name: 'www.51jrq.com', number: 87 }], '06-16': [{ name: 'www.baidu.com', number: 660 }, { name: 'www.sogou.com', number: 276 }, { name: 'www.51jrq.com', number: 142 }],
        },
    }, {
        name: '浏览器品牌',
        list: {
            '06-10': [{ name: '360', number: 515 }, { name: 'IE', number: 119 }, { name: 'Firefox', number: 100 }], '06-11': [{ name: '360', number: 696 }, { name: 'IE', number: 390 }, { name: 'Firefox', number: 52 }], '06-12': [{ name: '360', number: 608 }, { name: 'IE', number: 192 }, { name: 'Firefox', number: 55 }], '06-13': [{ name: '360', number: 549 }, { name: 'IE', number: 273 }, { name: 'Firefox', number: 75 }], '06-14': [{ name: '360', number: 610 }, { name: 'IE', number: 389 }, { name: 'Firefox', number: 50 }], '06-15': [{ name: '360', number: 633 }, { name: 'IE', number: 206 }, { name: 'Firefox', number: 61 }], '06-16': [{ name: '360', number: 585 }, { name: 'IE', number: 264 }, { name: 'Firefox', number: 146 }],
        },
    }],
},
{
    userGroup: '上海的用户',
    quota: [{
        name: '新增用户',
        list: {
            '06-10': 93, '06-11': 66, '06-12': 40, '06-13': 62, '06-14': 80, '06-15': 69, '06-16': 72,
        },
    }, {
        name: '活跃用户',
        list: {
            '06-10': 1413, '06-11': 1140, '06-12': 1276, '06-13': 1100, '06-14': 1224, '06-15': 1000, '06-16': 1418,
        },
    }, {
        name: '沉默用户',
        list: {
            '06-10': 70, '06-11': 74, '06-12': 97, '06-13': 61, '06-14': 6, '06-15': 26, '06-16': 36,
        },
    }, {
        name: '访问次数',
        list: {
            '06-10': 1781, '06-11': 1663, '06-12': 1559, '06-13': 2033, '06-14': 1692, '06-15': 2155, '06-16': 1897,
        },
    }],
    attribute: [{
        name: '省份',
        list: {
            '06-10': [{ name: '上海', number: 549 }, { name: '浙江', number: 495 }, { name: '广东', number: 188 }, { name: '江苏', number: 114 }, { name: '深圳', number: 63 }], '06-11': [{ name: '上海', number: 615 }, { name: '浙江', number: 342 }, { name: '广东', number: 142 }, { name: '江苏', number: 173 }, { name: '深圳', number: 83 }], '06-12': [{ name: '浙江', number: 543 }, { name: '上海', number: 244 }, { name: '江苏', number: 144 }, { name: '广东', number: 163 }, { name: '深圳', number: 41 }], '06-13': [{ name: '浙江', number: 621 }, { name: '上海', number: 425 }, { name: '广东', number: 139 }, { name: '江苏', number: 162 }, { name: '深圳', number: 44 }], '06-14': [{ name: '上海', number: 696 }, { name: '浙江', number: 281 }, { name: '江苏', number: 120 }, { name: '广东', number: 55 }, { name: '深圳', number: 29 }], '06-15': [{ name: '浙江', number: 688 }, { name: '上海', number: 218 }, { name: '江苏', number: 132 }, { name: '广东', number: 76 }, { name: '深圳', number: 57 }], '06-16': [{ name: '浙江', number: 526 }, { name: '上海', number: 258 }, { name: '广东', number: 224 }, { name: '江苏', number: 108 }, { name: '深圳', number: 37 }],
        },
    }, {
        name: '城市',
        list: {
            '06-10': [{ name: '上海', number: 56 }, { name: '杭州', number: 38 }, { name: '广州', number: 47 }, { name: '南昌', number: 16 }, { name: '深圳', number: 12 }], '06-11': [{ name: '上海', number: 96 }, { name: '杭州', number: 38 }, { name: '广州', number: 45 }, { name: '南昌', number: 14 }, { name: '深圳', number: 12 }], '06-12': [{ name: '杭州', number: 56 }, { name: '上海', number: 66 }, { name: '南昌', number: 12 }, { name: '广州', number: 26 }, { name: '深圳', number: 15 }], '06-13': [{ name: '杭州', number: 77 }, { name: '上海', number: 50 }, { name: '广州', number: 13 }, { name: '南昌', number: 28 }, { name: '深圳', number: 12 }], '06-14': [{ name: '上海', number: 88 }, { name: '杭州', number: 41 }, { name: '南昌', number: 22 }, { name: '广州', number: 18 }, { name: '深圳', number: 19 }], '06-15': [{ name: '杭州', number: 100 }, { name: '上海', number: 48 }, { name: '南昌', number: 21 }, { name: '广州', number: 26 }, { name: '深圳', number: 18 }], '06-16': [{ name: '杭州', number: 54 }, { name: '上海', number: 60 }, { name: '广州', number: 35 }, { name: '南昌', number: 16 }, { name: '深圳', number: 18 }],
        },
    }, {
        name: '来源域名',
        list: {
            '06-10': [{ name: 'www.baidu.com', number: 659 }, { name: 'www.sogou.com', number: 206 }, { name: 'www.51jrq.com', number: 89 }], '06-11': [{ name: 'www.baidu.com', number: 649 }, { name: 'www.sogou.com', number: 166 }, { name: 'www.51jrq.com', number: 76 }], '06-12': [{ name: 'www.baidu.com', number: 687 }, { name: 'www.sogou.com', number: 171 }, { name: 'www.51jrq.com', number: 116 }], '06-13': [{ name: 'www.baidu.com', number: 602 }, { name: 'www.sogou.com', number: 161 }, { name: 'www.51jrq.com', number: 176 }], '06-14': [{ name: 'www.baidu.com', number: 595 }, { name: 'www.sogou.com', number: 166 }, { name: 'www.51jrq.com', number: 177 }], '06-15': [{ name: 'www.baidu.com', number: 687 }, { name: 'www.sogou.com', number: 236 }, { name: 'www.51jrq.com', number: 138 }], '06-16': [{ name: 'www.baidu.com', number: 530 }, { name: 'www.sogou.com', number: 217 }, { name: 'www.51jrq.com', number: 131 }],
        },
    }, {
        name: '浏览器品牌',
        list: {
            '06-10': [{ name: '360', number: 663 }, { name: 'IE', number: 283 }, { name: 'Firefox', number: 151 }], '06-11': [{ name: '360', number: 549 }, { name: 'IE', number: 265 }, { name: 'Firefox', number: 63 }], '06-12': [{ name: '360', number: 617 }, { name: 'IE', number: 153 }, { name: 'Firefox', number: 118 }], '06-13': [{ name: '360', number: 591 }, { name: 'IE', number: 368 }, { name: 'Firefox', number: 145 }], '06-14': [{ name: '360', number: 546 }, { name: 'IE', number: 280 }, { name: 'Firefox', number: 123 }], '06-15': [{ name: '360', number: 664 }, { name: 'IE', number: 114 }, { name: 'Firefox', number: 139 }], '06-16': [{ name: '360', number: 599 }, { name: 'IE', number: 156 }, { name: 'Firefox', number: 94 }],
        },
    }],
}];
