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
}

</style>

<template>
    <div class="son-app">
        <!-- 选项区域 -->
        <UserGroupSelect @changeSelectUserGroup="changeSelectUserGroup"></UserGroupSelect>
        <div class="option-layout">
            <Index-Attribute-Selector @changeSelectIndex="changeSelectIndex"
            @changeSelectAttribute="changeSelectAttribute"></Index-Attribute-Selector>
            <div style="margin-top:15px;" v-if="selectedAttribute!==''">
                <el-button type="primary" size="small" @click="clickSearch()">查询</el-button>
            </div>
        </div>
        <!-- 图 -->
        <Chart></Chart>
        <!-- 表 -->
        <Table></Table>
    </div>
</template>

<script>
import UserGroupSelect from '../../../../components/UserGroupSelect/UserGroupSelect.vue';
import IndexAttributeSelector from '../../../../components/IndexAttributeSelector/IndexAttributeSelector.vue';
import Chart from '../../../../components/Chart/Chart.vue';
import Table from '../../../../components/Table/Table.vue';


export default {
    name: 'wholeAnalysis',
    data() {
        return {
            selectedIndex: '新增用户',
            selectedAttribute: '',
            selectedUserGroup: ['所有用户'],
            event_option: [
                { value: '事件概览' },
                { value: '存款' },
                { value: '提现' },
            ],
        };
    },
    created() { },
    mounted() { },
    methods: {
        clickSearch() {
            console.log(this.selectedUserGroup, this.selectedIndex, this.selectedAttribute);
        },
        // 组件方法
        changeSelectIndex(index) {
            // 改变指标
            this.selectedIndex = index;
        },
        changeSelectAttribute(attribute) {
            // 改变属性选择
            this.selectedAttribute = attribute;
        },
        changeSelectUserGroup(userGroup) {
            // 选择用户群改变
            this.selectedUserGroup = userGroup;
        },
    },
    computed: {},
    watch: {},
    components: {
        UserGroupSelect,
        'Index-Attribute-Selector': IndexAttributeSelector,
        Chart,
        Table,
    },
};
</script>
