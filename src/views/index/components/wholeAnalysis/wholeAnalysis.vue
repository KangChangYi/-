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
.option-layout {
    @include layout-base;
}

</style>

<template>
    <div class="son-app">
        <!-- 选项区域 -->
        <UserGroupSelect belong="whole"></UserGroupSelect>
        <div class="option-layout">
            <Index-Attribute-Selector belong="whole"></Index-Attribute-Selector>
            <!-- <div style="margin-top:15px;" v-if="selectedAttribute!==''">
                <el-button type="primary" size="small" @click="clickSearch()">查询</el-button>
            </div> -->
        </div>
        <!-- 图 -->
        <Chart belong="whole"></Chart>
        <!-- 表 -->
        <Table></Table>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import UserGroupSelect from '../../../../components/UserGroupSelect/UserGroupSelect.vue';
import IndexAttributeSelector from '../../../../components/IndexAttributeSelector/index.vue';
import Chart from '../../../../components/Chart/index.vue';
import Table from '../../../../components/Table/Table.vue';
// import { getData } from '../../../../api/chart';

export default {
    name: 'wholeAnalysis',
    data() {
        return {
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
    },
    computed: mapState({
        selectedUserGroup: state => state.whole.userGroup,
        selectedIndex: state => state.whole.index,
        selectedAttribute: state => state.whole.attribute,
    }),
    watch: {},
    components: {
        UserGroupSelect,
        'Index-Attribute-Selector': IndexAttributeSelector,
        Chart,
        Table,
    },
};
</script>
