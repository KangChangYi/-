

import Mock from 'mockjs';

const { Random } = Mock;
const browserList = ['Chrome', '360浏览器', 'QQ浏览器', 'FireFox'];
const getUserList = function () {
    return Mock.mock({
        'userList|10-20': [
            {
                guid: Random.guid(),
                name: Random.cname(),
                ip: Random.ip(),
                email: Random.email(),
                address: () => Random.county(true),
                browser: () => Random.pick(browserList),
            },
            {
                guid: Random.guid(),
                name: Random.cname(),
                ip: Random.ip(),
                email: Random.email(),
                browser: () => Random.pick(browserList),
                address: () => Random.county(true),
            },
            {
                guid: Random.guid(),
                name: Random.cname(),
                ip: Random.ip(),
                email: Random.email(),
                browser: () => Random.pick(browserList),
                address: () => Random.county(true),
            },
            {
                guid: Random.guid(),
                name: Random.cname(),
                ip: Random.ip(),
                email: Random.email(),
                browser: () => Random.pick(browserList),
                address: () => Random.county(true),
            },
            {
                guid: Random.guid(),
                name: Random.cname(),
                ip: Random.ip(),
                email: Random.email(),
                browser: () => Random.pick(browserList),
                address: () => Random.county(true),
            },
        ],
    });
};

export { getUserList };
