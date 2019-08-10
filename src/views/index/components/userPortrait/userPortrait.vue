<template>
    <div class="son-app">
        <UserGroupSelect belong="portrait" :isMultiple="false"></UserGroupSelect>
        <div class="tool-layout">
            <span>{{userGroupNumber}}人</span>
            <div class="search-and-button">
                <el-button type="primary" style="margin-right:15px;"  @click="tableToExcel()">
                    <i class="el-icon-download"></i> 下载
                </el-button>
                <el-radio-group v-model="listOrPortrait">
                    <el-radio-button label="列表"></el-radio-button>
                    <el-radio-button label="画像"></el-radio-button>
                </el-radio-group>
            </div>
        </div>

        <div class="table-layout" v-if="listOrPortrait==='列表'" v-loading="loading">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="guid" label="ID" width="210"></el-table-column>
                <el-table-column prop="name" label="姓名" width="140"></el-table-column>
                <el-table-column prop="gender" label="性别"></el-table-column>
                <el-table-column prop="ip" label="IP"></el-table-column>
                <el-table-column prop="email" label="邮箱"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column prop="browser" label="最近一次使用的浏览器"></el-table-column>
                <el-table-column prop="recentVisit" label="最近30天访问次数"></el-table-column>
            </el-table>
        </div>

        <div class="chart-layout" v-else>
             <UserPortraitChart-City chart="chart1" type="address"
              :tableData.sync="allTableData">
             </UserPortraitChart-City>

             <UserPortraitChart-Browser chart="chart2" type="browser"
             :tableData.sync="allTableData">
             </UserPortraitChart-Browser>

             <UserPortraitChart-Browser chart="chart3" type="gender"
             :tableData.sync="allTableData">
             </UserPortraitChart-Browser>
        </div>

        <div class="paging-layout" v-if="listOrPortrait==='列表'">
            <el-pagination layout="prev, pager, next"
             :total="userGroupNumber" :page-size="15"
             @current-change="clickPaging">
            </el-pagination>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';
import { setTimeout } from 'timers';
import { getUserList, getUserListLittie } from '../../../../api/userGroup';
import UserGroupSelect from '../../../../components/UserGroupSelect/index.vue';
import UserPortraitChart from '../../../../components/UserPortraitChart/index.vue';

export default {
    name: 'userPortrait',
    data() {
        return {
            listOrPortrait: '列表',
            allTableData: [
                // {
                //     date: '2016-05-02',
                //     name: '王小虎',
                //     address: '上海市普陀区金沙江路 1518 弄',
                // },
            ],
            tableData: [],
            loading: false,
        };
    },
    created() {
        this.loading = true;
        setTimeout(() => {
            getUserList().then((res) => {
                this.allTableData = res.data.userList;
                console.log(res.data);
                this.clickPaging(1);
            });
            this.loading = false;
        }, 500);
    },
    methods: {
        clickPaging(size) {
            console.log(size);
            const sliceSize = size * 15;
            this.tableData = this.allTableData.slice(sliceSize, sliceSize + 15);
        },
        tableToExcel() {
            // 要导出的json数据
            const jsonData = this.allTableData;
            // 列标题
            // let column = [];
            // this.data.forEach(val=>{
            //     column.push()
            // })
            const column = Object.keys(this.allTableData[0]);
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
            userGroup(state) {
                return state.portrait.userGroup;
            },
        }),
        userGroupNumber() {
            return this.allTableData.length;
        },
    },
    watch: {
        // 如果更新了用户群
        userGroup(newVal) {
            this.loading = true;
            setTimeout(() => {
                if (newVal === '所有用户') {
                    getUserList().then((res) => {
                        this.allTableData = res.data.userList;
                        console.log(res.data);
                        this.clickPaging(1);
                    });
                } else {
                    getUserListLittie().then((res) => {
                        this.allTableData = res.data.userList;
                        console.log(res.data);
                        this.clickPaging(1);
                    });
                }
                this.loading = false;
            }, 500);
        },
    },
    components: {
        UserGroupSelect,
        UserPortraitChartCity: UserPortraitChart,
        UserPortraitChartBrowser: UserPortraitChart,
    },
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
.tool-layout {
    margin-top: 30px;
    margin-bottom: 15px;
    @include displayCenter($justify-content:space-between);
    .search-and-button {
        @include displayCenter($justify-content:space-between);
    }
    span {
        font-size: $font-size-large;
        color: $text-color-primary;
    }
}
.table-layout,
.chart-layout {
    @include layout-base;
    margin: unset;
    box-shadow: $shadow-border-light;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.paging-layout{
    padding:20px;
    display:flex;
    justify-content: center;
}
</style>
