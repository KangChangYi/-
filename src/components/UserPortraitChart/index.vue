<template>
    <!-- 图区域 -->
    <div class="layout">
        <div class="chart-box">
            <div :id="chart" style="width: 100%;height:400px;" ></div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts';
// 三种图表基本设置
import chartOptionMap from '../Chart/utils/chartOptionMap';
// 三种图表绘制方法
// import chartDrawFuncMap from '../Chart/utils/chartDrawFuncMap';
export default {
    name: 'UserPortraitChart',
    props: {
        chart: String,
        tableData: Array,
        type: String,
    },
    data() {
        return {
            // 自定义日期选项
            isPieChartDisable: true,
        };
    },
    created() { },
    mounted() {
        const data = this.tableData;
        const cityList = {};
        data.forEach((val) => {
            const city = val[this.type].split(' ')[0];
            if (!(city in cityList)) {
                cityList[city] = 1;
            } else {
                cityList[city] += 1;
            }
        });

        this.setChartResize();
        console.log(cityList);
        this.drawChart(cityList, '汇总图');
    },
    methods: {
        drawChart(chartData, chartType = '趋势图') {
            const myChart = echarts.init(document.getElementById(this.chart));
            const defaultOption = Object.assign({}, chartOptionMap.get(chartType));
            this.chartDrawFunc(myChart, chartData, defaultOption);
        },
        chartDrawFunc(myChart, chartData, defaultOption) {
            const keys = Object.keys(chartData);
            defaultOption.xAxis.data = keys.slice(0, 7);
            const data = [];
            for (let i = 0; i < keys.length; i += 1) {
                if (i >= 7) {
                    break;
                }
                data.push(chartData[keys[i]]);
            }
            defaultOption.series = {
                type: 'bar',
                barWidth: '25%',
                data,
            };
            const title = new Map()
                .set('address', '地域')
                .set('browser', '浏览器')
                .set('gender', '性别');
            console.log(title.get(this.type));
            defaultOption.title.text = title.get(this.type);
            // 绘制图表
            myChart.setOption(defaultOption, true);
        },
        // 图表resize
        setChartResize() {
            // getInstanceByDom
            // const myChart = echarts.init(document.getElementById(this.chart));
            // const resize = window.onresize;
            // window.onresize = () => {
            //     setInterval(() => {
            //         resize();
            //         myChart.resize();
            //     }, 200);
            // };
        },
    },
    computed: { },
    watch: { },
    components: {},
};
</script>

<style lang='scss' scoped>
.layout {
    width:100%;
    border:1px #EFEFEF solid;
    border-radius: 5px;
    margin-bottom:20px;
    .chart-box {
        padding: 10px 0 20px 0;
    }
}
</style>
