<style lang='scss' scoped>
@import "../../../styles/public.scss";
.condition-layout{
    span{
        float: left;
        line-height:35px;
        padding-left:15px;
        margin-right:7px;
    }
    .button-box{
        float: left;
        margin-bottom:20px;
        button {
            font-size:10px;
        };
    }
}

</style>

<template>
    <div class="condition-layout">
        <condition-cell v-if="cellNumber!=0" :conditionType.sync="conditionType"
         number='1' @deleteConditionCell="deleteConditionCell"></condition-cell>
        <span v-if="cellNumber!=0">并且</span>
        <condition-cell v-if="cellNumber > 1" :conditionType.sync="conditionType"
             number='2' @deleteConditionCell="deleteConditionCell"></condition-cell>
        <span v-if="cellNumber > 1">并且</span>
        <condition-cell v-if="cellNumber > 2" :conditionType.sync="conditionType"
             number='3' @deleteConditionCell="deleteConditionCell"></condition-cell>
        <!-- <span v-if="cellNumber > 2">并且</span> -->
        <div class="button-box" v-if="cellNumber < 3">
            <el-button type="info" size="small" plain @click="doOrdont()">做过(没做过)..</el-button>
            <el-button type="info" size="small" plain @click="newlyAdd()">新增于..</el-button>
            <el-button type="info" size="small" plain @click="active()">活跃于..</el-button>
            <el-button type="info" size="small" plain @click="userAttribute()">用户属性满足..</el-button>
        </div>
    </div>
</template>

<script>

import conditionCell from './conditionCell.vue';

export default {
    name: 'defineButton',
    data() {
        return {
            cellNumber: 0,
            conditionType: [],
        };
    },
    created() {
        this.cellNumber = 0;
        this.conditionType = [];
    },
    methods: {
        doOrdont() {
            this.cellNumber += 1;
            this.conditionType.push('做过');
            this.$emit('newCondition', 'doOrdont');
        },
        newlyAdd() {
            this.cellNumber += 1;
            this.conditionType.push('新增于');
            this.$emit('newCondition', 'newlyAdd');
        },
        active() {
            this.cellNumber += 1;
            this.conditionType.push('活跃于');
            this.$emit('newCondition', 'active');
        },
        userAttribute() {
            this.cellNumber += 1;
            this.conditionType.push('用户属性满足');
            this.$emit('newCondition', 'userAttribute');
        },
        deleteConditionCell(number) {
            this.cellNumber -= 1;
            this.conditionType.splice(number - 1, 1);
        },
        closeCreateUserGroupDialog() {
            this.cellNumber = 0;
            this.conditionType = [];
        },
    },
    computed: {},
    watch: {},
    components: {
        conditionCell,
    },
};
</script>
