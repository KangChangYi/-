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
                    <el-tooltip class="item" effect="dark" content="只适用于属性细分"
                    placement="top" :disabled="!isPieChartDisable">
                        <el-radio-button label="占比图" :disabled="isPieChartDisable">
                        </el-radio-button>
                    </el-tooltip>
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
import { mapState } from 'vuex';
// 接口
import { getData } from '../../api/chart';
// 日期选择器快捷方法
import shortcuts from './utils/datePickerShortcuts';
// 三种图表基本设置
import chartOptionMap from './utils/chartOptionMap';
// 三种图表绘制方法
import chartDrawFuncMap from './utils/chartDrawFuncMap';

export default {
    name: 'Chart',
    props: {
        belong: String,
    },
    data() {
        return {
            // 日期选择器
            selectedDate: [new Date(new Date() * 1 - 1000 * 60 * 60 * 24 * 7), new Date()],
            // 趋势图 汇总图 占比图
            chartType: '趋势图',
            // 当前图表数据
            chartData: '',
            // 自定义日期选项
            datePickerOptions: {
                disabledDate(time) {
                    return time.getTime() > new Date();
                },
                shortcuts,
            },
            isPieChartDisable: true,
        };
    },
    created() { },
    async mounted() {
        // 获取初始图数据 接口
        // await getData().then((res) => {
        //     this.$store.commit('changeChartData', {
        //         page: 'whole',
        //         value: res.data.data,
        //     });
        // });
        // 获取初始图数据 接口
        await getData().then((res) => {
            this.chartData = res.data.data;
            console.log(res.data.data);
        });
        this.setChartResize();
        this.drawChart(this.chartData);
    },
    methods: {
        // 绘制图表
        drawChart(chartData, chartType = '趋势图') {
            const myChart = echarts.getInstanceByDom(document.getElementById('chart'));
            const defaultOption = chartOptionMap.get(chartType);
            const chartDrawFunc = chartDrawFuncMap.get(chartType);
            chartDrawFunc(myChart, chartData, defaultOption);
        },
        // 图表resize
        setChartResize() {
            const myChart = echarts.init(document.getElementById('chart'));
            window.onresize = () => {
                myChart.resize();
            };
        },
        changeDatePicker() {
            // 改变日期选择器事件
            if (this.belong) {
                this.$store.commit('changeDate', {
                    page: this.belong,
                    value: this.selectedDate,
                });
            }
            console.log(this.selectedDate);
        },
        clickChartType(e) {
            // 改变图表类型
            this.chartType = e;
            switch (e) {
            case '汇总图':
                this.drawChart(this.chartData, '汇总图');
                break;
            case '占比图':
                this.drawChart(this.chartData, '占比图');
                break;
            default:
                this.drawChart(this.chartData, '趋势图');
                break;
            }
            console.log(e);
            console.log('chartData', this.chartData);
        },
        async getChartData() {
            await getData().then((res) => {
                this.chartData = res.data.data;
                console.log(res.data.data);
            });
            this.drawChart(this.chartData, this.chartType);
        },
    },
    computed: {
        ...mapState({
            userGroup(state) {
                return state[this.belong].userGroup;
            },
            index(state) {
                return state[this.belong].index;
            },
            attribute(state) {
                return state[this.belong].attribute;
            },
            date(state) {
                return state[this.belong].date;
            },
        // 实时获取vuex中的图表数据
        // chartData: state => state.whole.chartData,
        }),
    },
    watch: {
        userGroup() {
            this.getChartData();
        },
        index() {
            this.getChartData();
        },
        attribute(newVal) {
            this.isPieChartDisable = Boolean(newVal) !== true;
            this.getChartData();
        },
        date() {
            this.getChartData();
        },
        // 监听图表数据变化  触发图表绘制事件
        // chartData(newVal) {
        //     this.drawChart(newVal);
        // },
    },
    components: {},
};

</script>

<style lang='scss' scoped>
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
