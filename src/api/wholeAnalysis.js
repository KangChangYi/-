// FIXME:该文件为示例文件，请及时修改或者删除
import request from '@/utils/request';

export function getIndexGroupOption(email, password) {
    return request({
        url: '/getIndexGroupOption',
        method: 'get',
        data: {
            email,
            password,
            name: email,
        },
    });
}
