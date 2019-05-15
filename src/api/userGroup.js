// FIXME:该文件为示例文件，请及时修改或者删除
import request from '@/utils/request';

export function getUserGroup(email, password) {
    return request({
        url: '/getUserGroup',
        method: 'get',
        data: {
            email,
            password,
            name: email,
        },
    });
}


export function getUserList(email, password) {
    return request({
        url: '/getUserList',
        method: 'get',
        data: {
            email,
            password,
            name: email,
        },
    });
}
