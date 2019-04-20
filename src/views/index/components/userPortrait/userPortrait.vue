<style lang='scss' scoped>
@import "../../../../styles/public.scss";
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
.table-layout {
    box-shadow: $shadow-border-light;
}
</style>

<template>
    <div class="son-app">
        <userGroupSelect></userGroupSelect>
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
        <div class="table-layout">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import userGroupSelect from '../../../../components/userGroupSelect.vue';

export default {
    name: 'userPortrait',
    data() {
        return {
            listOrPortrait: '',
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                },
            ],
        };
    },
    created() {},
    methods: {},
    computed: {},
    watch: {},
    components: { userGroupSelect },
};
</script>
