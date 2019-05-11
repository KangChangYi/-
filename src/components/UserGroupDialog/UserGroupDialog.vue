<style lang='scss' scoped>
@import "../../styles/public.scss";
</style>

<template>
    <el-dialog title="创建用户群" :visible.sync="show"
         width="50%" @close="closeCreateUserGroupDialog()">
        <dialogContent ref="dialogContent"></dialogContent>
         <span slot="footer" class="dialog-footer">
            <el-button @click="show = false">取 消</el-button>
            <el-button type="primary" @click="confirmCreateUserGroup()">保 存</el-button>
         </span>
    </el-dialog>
</template>

<script>
import dialogContent from './components/dialogContent.vue';

export default {
    name: 'login',
    data() {
        return {
        };
    },
    props: {
        show: Boolean,
    },
    created() {},
    methods: {
        confirmCreateUserGroup() {

        },
        closeCreateUserGroupDialog() {
            setTimeout(() => {
                this.$emit('closeCreateUserGroupDialog');
                this.$refs.dialogContent.closeCreateUserGroupDialog();
            }, 300);
        },
    },
    computed: {},
    watch: {},
    components: {
        dialogContent,
    },
};
</script>
