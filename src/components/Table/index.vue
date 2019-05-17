<template>
    <div class="table-layout">
        <el-table :data="tableData" border style="width: 100%" min-height="250">
            <el-table-column v-for="item in tableColumn" :item="item.prop" :key="item.prop"
             :prop="item.prop"  :label="item.title"></el-table-column>
        </el-table>
        <div class="table-button-and-paging">
            <el-button type="primary" @click="tableToExcel()">
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
            console.log(chartData);
            // 提取图表数据

            chartData.forEach((val) => {
                tableData.push({
                    用户群: val.userGroup,
                    指标: val.quota.name,
                    ...val.quota.list,
                });
            });
            console.log(tableData);

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
            console.log(tableData);
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
        tableToExcel() {
            // 要导出的json数据
            const jsonData = this.tableData;
            // 列标题
            // let column = [];
            // this.data.forEach(val=>{
            //     column.push()
            // })
            const column = Object.keys(this.tableData[0]);
            let str = '';
            column.forEach((val) => {
                str += `<td>${val}</td>`;
            });
            str = `<tr>${str}</tr>`;
            // 循环遍历，每行加入tr标签，每个单元格加td标签
            for (let i = 0; i < jsonData.length; i += 1) {
                str += '<tr>';
                // eslint-disable-next-line guard-for-in
                // eslint-disable-next-line no-restricted-syntax
                for (const item in jsonData[i]) {
                    // 增加\t为了不让表格显示科学计数法或者其他格式
                    str += `<td>${`${jsonData[i][item]}\t`}</td>`;
                }
                str += '</tr>';
            }
            // Worksheet名
            const worksheet = 'Sheet1';
            const uri = 'data:application/vnd.ms-excel;base64,';

            // 下载的表格模板数据
            const template = `<html xmlns:o="urn:schemas-microsoft-com:office:office"
                xmlns:x="urn:schemas-microsoft-com:office:excel"
                xmlns="http://www.w3.org/TR/REC-html40">
                <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
                    <x:Name>${worksheet}</x:Name>
                    <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
                    </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
                    </head><body><table>${str}</table></body></html>`;
            // 下载模板
            window.location.href = uri + this.base64(template);
        },
        // 输出base64编码
        base64(s) { return window.btoa(unescape(encodeURIComponent(s))); },
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
