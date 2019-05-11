import Mock from 'mockjs';

const getUserGroup = Mock.mock({
    userGroup: [
        { value: '所有用户' },
        { value: '已注册用户' },
        { value: '余额100以内用户' },
        { value: '沉默用户' },
    ],
});

const getAttribute = Mock.mock({
    attribute: [
        { value: '浏览器品牌' },
        { value: '浏览器版本' },
        { value: '操作系统' },
        { value: 'IP' },
        { value: '城市' },
        { value: '省份' },
    ],
});

export { getUserGroup, getAttribute };
