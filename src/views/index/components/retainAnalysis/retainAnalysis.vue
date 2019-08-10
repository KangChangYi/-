<template>
     <div class="son-app">
        <!-- 选项区域 -->
        <UserGroupSelect belong="retain"></UserGroupSelect>
        <div class="option-layout">
            <Index-Attribute-Selector belong="retain"></Index-Attribute-Selector>
            <!-- <div style="margin-top:15px;" v-if="selectedAttribute!==''">
                <el-button type="primary" size="small" @click="clickSearch()">查询</el-button>
            </div> -->
        </div>
        <!-- 图 -->
        <Chart belong="retain" v-loading="isLoading"></Chart>
        <!-- 表 -->
        <Table belong="retain" v-loading="isLoading"></Table>
        <!-- <div class="option-layout">
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
        </div> -->
    </div>
</template>

<script>
import { mapState } from 'vuex';
import UserGroupSelect from '../../../../components/UserGroupSelect/index.vue';
import IndexAttributeSelector from '../../../../components/IndexAttributeSelector/index.vue';
import Chart from '../../../../components/Chart/index.vue';
import Table from '../../../../components/Table/index.vue';

export default {
    name: 'retainAnalysis',
    data() {
        return {
        };
    },
    created() { },
    mounted() {
        const condition = this.getCondition();
        this.$store.dispatch('changeChartData', {
            page: 'retain',
            value: condition,
        });
    },
    methods: {
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
        userGroup: state => state.retain.userGroup,
        quota: state => state.retain.quota,
        attribute: state => state.retain.attribute,
        date: state => state.retain.date,
        isLoading: state => state.retain.isLoading,
    }),
    watch: {
        userGroup() {
            const condition = this.getCondition();
            this.$store.dispatch('changeChartData', {
                page: 'retain',
                value: condition,
            });
        },
        quota() {
            const condition = this.getCondition();
            this.$store.dispatch('changeChartData', {
                page: 'retain',
                value: condition,
            });
        },
        attribute() {
            const condition = this.getCondition();
            this.$store.dispatch('changeChartData', {
                page: 'retain',
                value: condition,
            });
        },
        date() {
            const condition = this.getCondition();
            this.$store.dispatch('changeChartData', {
                page: 'retain',
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
