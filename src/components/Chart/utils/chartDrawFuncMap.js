function lineChart(myChart, chartData, defaultOption) {
    // 设置x轴坐标
    defaultOption.xAxis = {
        ...defaultOption.xAxis,
        data: Object.keys(chartData[0].list),
    };
    // 设置数据
    for (let i = 0; i < chartData.length; i += 1) {
        defaultOption.series[i] = {
            name: chartData[i].userGroup,
            type: 'line',
            data: Object.values(chartData[i].list),
        };
    }
    // 绘制图表
    console.log(defaultOption.series);
    myChart.setOption(defaultOption, true);
}

function barChart(myChart, chartData, defaultOption) {
    console.log(chartData);
    const xArray = Object.keys(chartData[0].list);
    const x = `${xArray[0]}~${xArray[xArray.length - 1]}`;
    defaultOption.xAxis = {
        ...defaultOption.xAxis,
        data: [x],
    };
    // 设置数据
    let sum;
    for (let i = 0; i < chartData.length; i += 1) {
        sum = Object.values(chartData[i].list).reduce((acc, val) => acc + Number(val));
        defaultOption.series[i] = {
            name: chartData[i].userGroup,
            type: 'bar',
            barWidth: '3%',
            data: [sum],
        };
    }
    // 绘制图表
    console.log(defaultOption);
    myChart.setOption(defaultOption, true);
}

function pieChart(myChart, chartData, defaultOption) {
    // 绘制图表
    myChart.setOption(defaultOption, true);
}

const chartDrawFuncMap = new Map();
chartDrawFuncMap
    .set('趋势图', lineChart)
    .set('汇总图', barChart)
    .set('占比图', pieChart);

export default chartDrawFuncMap;
