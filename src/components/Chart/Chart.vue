<style lang='scss' scoped>
@import "../../styles/public.scss";
@mixin layout-base {
    height: fit-content;
    margin: auto;
    margin-bottom: 15px;
    padding: 15px 20px;
    background: white;
    box-shadow: $shadow-border-light;
    border-radius: 3px;
}
.chart-layout {
    @include layout-base;
    padding: 0;
    .date-picker-chart-type-layout {
        padding: 10px 20px 10px 20px;
        background: #f3f3f3;
        @include displayCenter($justify-content: space-between);
    }
    .chart-box {
        padding: 10px 0 20px 0;
    }
}
</style>

<template>
    <!-- 图区域 -->
    <div class="chart-layout">
        <!-- 时间选择器 -->
        <div class="date-picker-chart-type-layout">
            <el-date-picker
                v-model="selectedDate"
                @change="changeDatePicker()"
                value-format="yyyy-MM-dd"
                type="daterange"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="datePickerOptions"
            ></el-date-picker>
            <div>
                <el-radio-group v-model="chartType" @change="clickChartType($event)" >
                    <el-radio-button label="趋势图"></el-radio-button>
                    <el-radio-button label="汇总图"></el-radio-button>
                    <el-radio-button label="占比图"></el-radio-button>
                </el-radio-group>
            </div>
        </div>
        <div class="chart-box">
            <div id="chart" style="width: 100%;height:400px;" ></div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts';
import lineChartOption from './lineChartOption';
import barChartOption from './barChartOption';
import pieChartOption from './pieChartOption';
import { getData } from '../../api/chart';

const chartOptionMap = new Map();
chartOptionMap
    .set('趋势图', lineChartOption)
    .set('汇总图', barChartOption)
    .set('占比图', pieChartOption);
function lineChart(myChart, chartData, defaultOption) {
    // 设置x轴坐标
    defaultOption.xAxis = {
        ...defaultOption.xAxis,
        data: Object.keys(chartData.data[0].list),
    };
    // 设置数据
    for (let i = 0; i < chartData.data.length; i += 1) {
        defaultOption.series[i] = {
            name: chartData.data[i].userGroup,
            type: 'line',
            data: Object.values(chartData.data[i].list),
        };
    }
    // 绘制图表
    myChart.setOption(defaultOption, true);
}
function barChart(myChart, chartData, defaultOption) {
    const xArray = Object.keys(chartData.data[0].list);
    const x = `${xArray[0]}~${xArray[xArray.length - 1]}`;
    defaultOption.xAxis = {
        ...defaultOption.xAxis,
        data: [x],
    };
    let sum;
    for (let i = 0; i < chartData.data.length; i += 1) {
        sum = Object.values(chartData.data[i].list).reduce((acc, val) => acc + Number(val));
        defaultOption.series[i] = {
            name: chartData.data[i].userGroup,
            type: 'bar',
            barWidth: '3%',
            data: [sum],
        };
    }
    // 绘制图表
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

export default {
    name: 'login',
    data() {
        return {
            // 日期选择器
            selectedDate: '',
            // 趋势图 汇总图 占比图
            chartType: '趋势图',
            // 当前图表数据
            currentData: '',
            // 自定义日期选项
            datePickerOptions: {
                disabledDate(time) {
                    return time.getTime() > new Date();
                },
                shortcuts: [
                    {
                        text: '今天',
                        onClick(picker) {
                            const today = new Date();
                            picker.$emit('pick', [today, today]);
                        },
                    },
                    {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', [date, date]);
                        },
                    },
                    {
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        },
                    },
                    {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        },
                    },
                    {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        },
                    },
                ],
            },
        };
    },
    created() { },
    async mounted() {
        // 获取初始图数据 接口
        await getData().then((res) => {
            this.currentData = res.data;
            console.log(res.data.data);
        });
        this.setChartResize();
        this.drawChart(this.currentData);
    },
    methods: {
        drawChart(chartData, chartType = '趋势图') {
            const myChart = echarts.getInstanceByDom(document.getElementById('chart'));
            const defaultOption = chartOptionMap.get(chartType);
            const chartDrawFunc = chartDrawFuncMap.get(chartType);
            chartDrawFunc(myChart, chartData, defaultOption);
        },
        setChartResize() {
            const myChart = echarts.init(document.getElementById('chart'));
            window.onresize = () => {
                myChart.resize();
            };
        },
        changeDatePicker() {
            // 改变日期选择器事件
            console.log(this.selectedDate);
        },
        clickChartType(e) {
            // 改变图表类型
            this.chartType = e;
            switch (e) {
            case '汇总图':
                this.drawChart(this.currentData, '汇总图');
                break;
            case '占比图':
                this.drawChart(this.currentData, '占比图');
                break;
            default:
                this.drawChart(this.currentData, '趋势图');
                break;
            }
            console.log(e);
            console.log('currentData', this.currentData);
        },
    },
    computed: {},
    watch: {},
    components: {},
};

</script>
