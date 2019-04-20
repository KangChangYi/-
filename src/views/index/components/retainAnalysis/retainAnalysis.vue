<style lang='scss' scoped>
@import "../../../../styles/public.scss";
@mixin layout-base {
    height: fit-content;
    margin: auto;
    margin-bottom: 15px;
    padding: 15px 20px;
    background: white;
    box-shadow: $shadow-border-light;
    border-radius: 3px;
}
.option-layout {
    @include layout-base;
    .index-select-box {
        @include displayCenter($justify-content: flex-start);
        .index-attribute-box {
            margin-left: 20px;
            @include displayCenter($justify-content: flex-start);
        }
    }
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
.table-layout {
    @include layout-base;
    padding-bottom: 10px;
    .table-button-and-paging {
        padding-top: 10px;
        @include displayCenter($justify-content: space-between);
    }
}
</style>

<template>
    <div class="son-app">
        <!-- 选项区域 -->
        <userGroupSelect></userGroupSelect>
        <div class="option-layout">
            <div class="index-select-box">
                <div>用户留存：</div>
                <el-select
                    @change="changeSelectIndex()"
                    v-model="selectedIndex"
                    placeholder="请选择指标分组"
                >
                    <el-option
                        v-for="item in index_group_option"
                        :key="item.value"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <div>
                    <div class="index-attribute-box">
                        <div style="margin-right:10px;">初始行为是：</div>
                        <el-select
                            @change="changeSelectAttribute()"
                            v-model="selectedAttribute"
                            placeholder="请选择属性"
                            clearable
                        >
                            <el-option
                                v-for="item in attribute"
                                :key="item.value"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                    <div class="index-attribute-box">
                        <div style="margin-right:10px;">回访行为是：</div>
                        <el-select
                            @change="changeSelectAttribute()"
                            v-model="selectedAttribute"
                            placeholder="请选择属性"
                            clearable
                        >
                            <el-option
                                v-for="item in attribute"
                                :key="item.value"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                </div>
            </div>
            <div
                style="margin-top:15px;"
                v-if="selectedAttribute!==''"
            >
                <el-button
                    type="primary"
                    size="small"
                >查询</el-button>
            </div>
        </div>
        <!-- 图表区域 -->
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
            </div>
            <div class="chart-box">
                <div
                    id="main"
                    style="width: 100%;height:400px;"
                ></div>
            </div>
        </div>
        <div class="table-layout">
            <el-table
                :data="tableData4"
                style="width: 100%"
                max-height="250"
            >
                <el-table-column
                    fixed
                    prop="date"
                    label="日期"
                ></el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                ></el-table-column>
                <el-table-column
                    prop="province"
                    label="省份"
                ></el-table-column>
                <el-table-column
                    prop="city"
                    label="市区"
                ></el-table-column>
                <el-table-column
                    prop="address"
                    label="地址"
                ></el-table-column>
                <el-table-column
                    prop="zip"
                    label="邮编"
                ></el-table-column>
            </el-table>
            <div class="table-button-and-paging">
                <el-button type="primary">
                    <i class="el-icon-download"></i> 导出
                </el-button>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400"
                ></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import userGroupSelect from '../../../../components/userGroupSelect.vue';

export default {
    name: 'retainAnalysis',
    data() {
        return {
            selectedUserGroup: ['所有用户'],
            selectedIndex: '新增用户留存',
            selectedAttribute: '',
            index_group_option: [
                { value: '新增用户留存' },
                { value: '活跃用户留存' },
                { value: '自定义留存' },
            ],
            event_option: [
                { value: '事件概览' },
                { value: '存款' },
                { value: '提现' },
            ],
            attribute: [{ value: '浏览器品牌' }, { value: 'IP' }, { value: '国家' }],
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
            // 日期选择器
            selectedDate: '',
            // 线图 柱图 饼图
            chartType: '',
            tableData4: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                },
            ],
        };
    },
    created() { },
    mounted() {
        // eslint-disable-next-line global-require
        const echarts = require('echarts');

        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985',
                    },
                },
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                },
            ],
            yAxis: [
                {
                    type: 'value',
                },
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [120, 132, 101, 134, 90, 230, 210],
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [220, 182, 191, 234, 290, 330, 310],
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [150, 232, 201, 154, 190, 330, 410],
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [320, 332, 301, 334, 390, 330, 320],
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                        },
                    },
                    areaStyle: { normal: {} },
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                },
            ],
        };
        myChart.setOption(option);
        window.onresize = function () {
            myChart.resize();
            // myChart1.resize();    //若有多个图表变动，可多写
        };
    },
    methods: {
        changeSelectUserGroup() {
            // 选择用户群改变
        },
        clickCreateUserGroup() {
            // 新建用户群
        },
        changeSelectIndex() {
            // 改变指标
        },
        changeSelectAttribute() {
            // 改变属性选择
        },
        changeDatePicker() {
            // 改变日期选择器事件
        },

        clickChartType() {
            // 改变图表类型
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
    },
    computed: {},
    watch: {},
    components: {
        userGroupSelect,
    },
};
</script>
