// 折线图option
module.exports = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
        },
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                width: 0.5,
                color: '#DFDFDF',
                type: 'dashed',
            },
        },
    },
    series: [
        {
            name: '新增用户',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210],
        },
    ],
    textStyle: {
        color: '#606266',
        fontFamily: 'Microsoft YaHei',
    },
    color: ['#4dc7ec', '#f8c9cb', '#b8a1a9', '#a8b7d8', '#07b195', '#6dade2', '#b5a87f', '#1fb27f', '#ffe901', '#b295c5'],
};
