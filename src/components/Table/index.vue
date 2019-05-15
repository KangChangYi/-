<template>
    <div class="table-layout">
        <el-table :data="tableData" border style="width: 100%" min-height="250">
            <el-table-column v-for="item in tableColumn" :item="item.prop" :key="item.prop"
             :prop="item.prop"  :label="item.title"></el-table-column>
        </el-table>
        <div class="table-button-and-paging">
            <el-button type="primary">
                <i class="el-icon-download"></i> 导出
            </el-button>
            <el-pagination
                @current-change="handleCurrentChange()"
                :current-page.sync="currentPage"
                :page-size="30"
                layout="prev, pager, next, jumper"
                :total="300">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Table',
    props: {
        belong: String,
    },
    data() {
        return {
            currentPage: 1,
            tableColumn: [
                { prop: 'date', title: '日期' },
                { prop: 'name', title: '姓名' },
                { prop: 'province', title: '省份' },
            ],
            tableData: [],
        };
    },
    created() { },
    methods: {
        handleCurrentChange() {
            console.log('changePage');
        },
        drawTable(chartData, chartType = '趋势图') {
            if (chartType !== '趋势图') {
                this.pieAndBarMode(chartData);
            } else {
                this.lineMode(chartData);
            }
        },
        // 当图类型是趋势图时的表格结构
        lineMode(chartData) {
            const tableData = [];
            const tableColumn = [];

            // 提取图表数据
            chartData.forEach((value) => {
                tableData.push({
                    所有用户: value.userGroup,
                    指标: value.index,
                    ...value.list,
                });
            });

            // 提取字段
            Object.keys(tableData[0]).forEach((name) => {
                tableColumn.push({
                    prop: name,
                    title: name,
                });
            });

            this.tableColumn = tableColumn;
            this.tableData = tableData;
        },
        pieAndBarMode(chartData) {
            // list 的键数组
            const keysArray = Object.keys(chartData[0].list);
            // pie 和 bar 需要将日期合并
            const dateRange = `${keysArray[0]}~${keysArray[keysArray.length - 1]}`;

            const tableData = [];
            const tableColumn = [];

            // 提取图表数据
            chartData.forEach((value) => {
                const dateValueSum = Object.values(value.list)
                    .reduce((acc, val) => acc + Number(val));
                tableData.push({
                    用户群: value.userGroup,
                    指标: value.index,
                    [dateRange]: dateValueSum,
                });
            });

            // 提取字段
            Object.keys(tableData[0]).forEach((name) => {
                tableColumn.push({
                    prop: name,
                    title: name,
                });
            });

            this.tableColumn = tableColumn;
            this.tableData = tableData;
        },
    },
    computed: {
        ...mapState({
            chartType(state) {
                return state[this.belong].chartType;
            },
            // 实时获取vuex中的图表数据
            chartData(state) {
                return state[this.belong].chartData;
            },
        }),
    },
    watch: {
        chartType(newVal) {
            this.drawTable(this.chartData, newVal);
        },
        // 监听图表数据变化  触发表数据更改事件
        chartData(newVal) {
            this.drawTable(newVal, this.chartType);
        },
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
.table-layout {
    @include layout-base;
    padding-bottom: 10px;
    .table-button-and-paging {
        padding-top: 10px;
        @include displayCenter($justify-content: space-between);
    }
}
</style>
