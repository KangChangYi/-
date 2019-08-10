

import Mock from 'mockjs';

const { Random } = Mock;
const browserList = ['Chrome', '360浏览器', 'QQ浏览器', 'FireFox'];
const gender = ['男', '女'];
const getUserList = function () {
    return Mock.mock({
        'userList|600-1000': [
            {
                guid: () => Random.guid(),
                name: () => Random.cname(),
                gender: () => Random.pick(gender),
                ip: () => Random.ip(),
                email: () => Random.email(),
                address: () => Random.city(true),
                browser: () => Random.pick(browserList),
                recentVisit: () => Random.natural(0, 15),
            },
        ],
    });
};

const getUserListLittie = function () {
    return Mock.mock({
        'userList|100-200': [
            {
                guid: () => Random.guid(),
                name: () => Random.cname(),
                gender: () => Random.pick(gender),
                ip: () => Random.ip(),
                email: () => Random.email(),
                address: () => Random.city(true),
                browser: () => Random.pick(browserList),
                recentVisit: () => Random.natural(0, 15),
            },
        ],
    });
};
export { getUserList, getUserListLittie };
