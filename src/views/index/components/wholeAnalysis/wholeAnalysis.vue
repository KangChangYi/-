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
        <Chart belong="whole" v-loading="isLoading"></Chart>
        <!-- 表 -->
        <Table belong="whole" v-loading="isLoading"></Table>
    </div>
</template>

<script>
import { mapState } from 'vuex';
// api
import { getWholeChartData } from '../../../../api/chart';

import UserGroupSelect from '../../../../components/UserGroupSelect/index.vue';
import IndexAttributeSelector from '../../../../components/IndexAttributeSelector/index.vue';
import Chart from '../../../../components/Chart/index.vue';
import Table from '../../../../components/Table/index.vue';
// import { getData } from '../../../../api/chart';

export default {
    name: 'wholeAnalysis',
    data() {
        return {
        };
    },
    created() {
        getWholeChartData().then((res) => {
            console.log(res);
            console.log(JSON.stringify(res.data));
        });
    },
    mounted() {
        const condition = this.getCondition();
        this.$store.dispatch('changeChartData', {
            page: 'whole',
            value: condition,
        });
    },
    methods: {
        // clickSearch() {
        //     console.log(this.selectedUserGroup, this.selectedIndex, this.selectedAttribute);
        // },
        getCondition() {
            const {
                userGroup, quota, attribute, date,
            } = this;
            return {
                userGroup,
                quota,
                attribute,
                date,
            };
        },
    },
    computed: mapState({
        userGroup: state => state.whole.userGroup,
        quota: state => state.whole.quota,
        attribute: state => state.whole.attribute,
        date: state => state.whole.date,
        isLoading: state => state.whole.isLoading,
    }),
    watch: {
        userGroup() {
            const condition = this.getCondition();
            this.$store.dispatch('changeChartData', {
                page: 'whole',
                value: condition,
            });
        },
        quota() {
            const condition = this.getCondition();
            this.$store.dispatch('changeChartData', {
                page: 'whole',
                value: condition,
            });
        },
        attribute() {
            const condition = this.getCondition();
            this.$store.dispatch('changeChartData', {
                page: 'whole',
                value: condition,
            });
        },
        date() {
            const condition = this.getCondition();
            this.$store.dispatch('changeChartData', {
                page: 'whole',
                value: condition,
            });
        },
    },
    components: {
        UserGroupSelect,
        'Index-Attribute-Selector': IndexAttributeSelector,
        Chart,
        Table,
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
.option-layout {
    @include layout-base;
}

</style>
