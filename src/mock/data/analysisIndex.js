import Mock from 'mockjs';

const getUserGroup = Mock.mock({
    userGroup: [
        { enable: '已启用', value: '所有用户', number: 3410 },
        { enable: '已启用', value: '最近7天付款用户', number: 1295 },
        { enable: '已启用', value: '余额100以内用户', number: 578 },
        { enable: '已启用', value: '沉默用户', number: 302 },
    ],
});

const getAttribute = Mock.mock({
    attribute: [
        { value: '省份' },
        { value: '城市' },
        { value: '操作系统' },
        { value: '访问机型' },
        { value: '来源域名' },
        { value: '浏览器品牌' },
        { value: '浏览器版本' },
        { value: '屏幕高度' },
        { value: '屏幕宽度' },
        { value: 'IP' },
    ],
});

export { getUserGroup, getAttribute };
