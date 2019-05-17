import Mock from 'mockjs';

const getIndexGroupOption = Mock.mock({
    indexGroupOption: [
        { value: '新增用户' },
        { value: '活跃用户' },
        { value: '沉默用户' },
        { value: '访问次数' },
        // { value: '浏览量（PV）' },
        // { value: '访客数（UV）' },
        // { value: '跳出率' },
    ],
});

export { getIndexGroupOption };
