<template>
    <div class="son-app">
        <!-- 选项区域 -->
        <UserGroupSelect belong="event"></UserGroupSelect>
        <div class="option-layout">
            <Index-Attribute-Selector belong="event"></Index-Attribute-Selector>
            <!-- <div style="margin-top:15px;" v-if="selectedAttribute!==''">
                <el-button type="primary" size="small" @click="clickSearch()">查询</el-button>
            </div> -->
        </div>
        <!-- 图 -->
        <Chart belong="event" v-loading="isLoading"></Chart>
        <!-- 表 -->
        <Table belong="event" v-loading="isLoading"></Table>

        <!-- <div class="option-layout">
            <div class="event-select-box">
                <div>事件：</div>
                <el-select  @change="changeSelectEventGroup()" v-model="selectedEventGroup"
                placeholder="请选择事件分组" >
                    <el-option v-for="item in event_group_option" :key="item.value"
                        :value="item.value" >
                    </el-option>
                </el-select>
                <el-select @change="changeSelectEvent()" v-model="selectedEvent"
                    placeholder="请选择事件" style="margin-left:10px;" >
                    <el-option v-for="item in event_option" :key="item.value"
                        :value="item.value">
                    </el-option>
                </el-select>

                <div class="event-attribute-box" v-if="selectedEvent!='事件概览'">
                    <div style="margin-right:10px;">按</div>
                    <el-select @change="changeSelectEvent()" v-model="selectedEventAttribute"
                        placeholder="请选择属性" clearable >
                        <el-option v-for="item in event_attribute" :key="item.value"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <div style="margin-left:10px;">细分</div>
                </div>
            </div>
            <div
                v-if="selectedEvent!='事件概览'"
                style="margin-top:15px;"
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
    name: 'eventAnalysis',
    data() {
        return {
        };
    },
    created() { },
    mounted() {
        const condition = this.getCondition();
        this.$store.dispatch('changeChartData', {
            page: 'event',
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
        userGroup: state => state.event.userGroup,
        quota: state => state.event.quota,
        attribute: state => state.event.attribute,
        date: state => state.event.date,
        isLoading: state => state.event.isLoading,
    }),
    watch: {
        userGroup() {
            const condition = this.getCondition();
            this.$store.dispatch('changeChartData', {
                page: 'event',
                value: condition,
            });
        },
        quota() {
            const condition = this.getCondition();
            this.$store.dispatch('changeChartData', {
                page: 'event',
                value: condition,
            });
        },
        attribute() {
            const condition = this.getCondition();
            this.$store.dispatch('changeChartData', {
                page: 'event',
                value: condition,
            });
        },
        date() {
            const condition = this.getCondition();
            this.$store.dispatch('changeChartData', {
                page: 'event',
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
