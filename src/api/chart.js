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

export function getWholeChartData() {
    return request({
        url: 'http://localhost:8001/getWholeChartData',
        method: 'get',
    });
}

export function getEventChartData(email, password) {
    return request({
        url: '/getEventChartData',
        method: 'get',
        data: {
            email,
            password,
            name: email,
        },
    });
}
