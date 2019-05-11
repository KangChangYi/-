// FIXME:该文件为示例文件，请及时修改或者删除
import request from '@/utils/request';

export function getData(email, password) {
    return request({
        url: '/getData',
        method: 'get',
        data: {
            email,
            password,
            name: email,
        },
    });
}

export function getData2(email, password) {
    return request({
        url: '/users/register',
        method: 'get',
        data: {
            email,
            password,
            name: email,
        },
    });
}
