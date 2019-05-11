// FIXME:该文件为示例文件，请及时修改或者删除
import request from '@/utils/request';

export function getAttribute(email, password) {
    return request({
        url: '/getAttribute',
        method: 'get',
        data: {
            email,
            password,
            name: email,
        },
    });
}
