// 柱状图option
module.exports = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
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
            name: '直接访问',
            type: 'bar',
            barWidth: '4%',
            data: [10, 52, 200, 334, 390, 330, 220],
        },
    ],
    textStyle: {
        color: '#606266',
        fontFamily: 'Microsoft YaHei',
    },
    color: ['#4dc7ec', '#f8c9cb', '#b8a1a9', '#a8b7d8', '#07b195', '#6dade2', '#b5a87f', '#1fb27f', '#ffe901', '#b295c5'],
};
