<style lang='scss' scoped>
@import "../../../styles/public.scss";
.dialog-content-box{
    margin-bottom:20px;
    width:100%;
    height:fit-content;
    display:inline-table;
    span{
        float: left;
        line-height: 35px;
        width:50px;
    }
    button {
        font-size:10px;
    }
}
</style>

<template>
    <div>
        <div class="dialog-content-box">
            <span>名称：</span>
            <el-input v-model="input" style="width:250px" placeholder="用户群名称"></el-input>
            </div>
        <div class="dialog-content-box">
            <span id="define">定义：</span>
            <defineButton @newCondition="newCondition" ref="defineButton"></defineButton>
        </div>
    </div>
</template>

<script>
import defineButton from './defineButton.vue';

export default {
    name: 'dialogContent',
    data() {
        return {};
    },
    created() {},
    methods: {
        newCondition(condition) {
            console.log(condition);
        },
        closeCreateUserGroupDialog() {
            this.$refs.defineButton.closeCreateUserGroupDialog();
        },
    },
    computed: {},
    watch: {},
    components: {
        defineButton,
    },
};
</script>
