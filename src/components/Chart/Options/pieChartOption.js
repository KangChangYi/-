// 饼图 option
module.exports = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    series: [
        {
            name: '所有用户',
            type: 'pie',
            radius: ['30%', '70%'],
            // center: ['50%', '55%'],
            avoidLabelOverlap: true,
            // label: {
            //     normal: {
            //         show: false,
            //         position: 'center',
            //     },
            //     emphasis: {
            //         show: true,
            //         textStyle: {
            //             fontSize: '30',
            //             fontWeight: 'bold',
            //         },
            //     },
            // },
            // labelLine: {
            //     normal: {
            //         show: false,
            //     },
            // },
            data: [],
        },
    ],
    textStyle: {
        color: '#606266',
        fontFamily: 'Microsoft YaHei',
    },
    color: ['#4dc7ec', '#f8c9cb', '#b8a1a9', '#a8b7d8', '#07b195', '#6dade2', '#b5a87f', '#1fb27f', '#ffe901', '#b295c5'],
};
