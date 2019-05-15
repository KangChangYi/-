<template>
    <div class="son-app">
        <UserGroupSelect></UserGroupSelect>
        <div class="tool-layout">
            <span>21,200人</span>
            <div class="search-and-button">
                <el-button type="primary" style="margin-right:15px;">
                    <i class="el-icon-download"></i> 下载
                </el-button>
                <el-radio-group v-model="listOrPortrait">
                    <el-radio-button label="列表"></el-radio-button>
                    <el-radio-button label="画像"></el-radio-button>
                </el-radio-group>
            </div>
        </div>
        <div class="table-layout" v-if="listOrPortrait==='列表'">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="guid" label="ID" width="200"></el-table-column>
                <el-table-column prop="name" label="姓名" width="200"></el-table-column>
                <el-table-column prop="ip" label="IP"></el-table-column>
                <el-table-column prop="email" label="邮箱"></el-table-column>
                 <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
        </div>

        <div class="chart-layout" v-else>
             <UserPortraitChart-City chart="chart1" type="address" :tableData.sync="tableData">
             </UserPortraitChart-City>
             <UserPortraitChart-Browser chart="chart2" type="browser" :tableData.sync="tableData">
             </UserPortraitChart-Browser>
        </div>
    </div>
</template>

<script>
import { getUserList } from '../../../../api/userGroup';
import UserGroupSelect from '../../../../components/UserGroupSelect/index.vue';
import UserPortraitChart from '../../../../components/UserPortraitChart/index.vue';

export default {
    name: 'userPortrait',
    data() {
        return {
            listOrPortrait: '列表',
            tableData: [
                // {
                //     date: '2016-05-02',
                //     name: '王小虎',
                //     address: '上海市普陀区金沙江路 1518 弄',
                // },
            ],
        };
    },
    created() {
        getUserList().then((res) => {
            this.tableData = res.data.userList;
            console.log(res.data);
        });
    },
    methods: {},
    computed: {},
    watch: { },
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
</style>
