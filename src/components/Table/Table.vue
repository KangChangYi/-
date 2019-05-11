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
    <div class="table-layout">
        <el-table :data="tableData4" style="width: 100%" max-height="250">
            <el-table-column fixed prop="date"  label="日期"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="province" label="省份"></el-table-column>
            <el-table-column prop="city" label="市区"></el-table-column>
            <el-table-column prop="address" label="地址" ></el-table-column>
            <el-table-column prop="zip" label="邮编" ></el-table-column>
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
                :page-size="100" layout="total, sizes, prev, pager, next, jumper"
                :total="400"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
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
    methods: {},
    computed: {},
    watch: {},
    components: {},
};
</script>
