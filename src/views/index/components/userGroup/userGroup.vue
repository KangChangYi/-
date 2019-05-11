<style lang='scss' scoped>
@import "../../../../styles/public.scss";
.tool-layout {
    margin-bottom: 15px;
    @include displayCenter($justify-content:space-between);
    .search-and-button {
        @include displayCenter($justify-content:space-between);
    }
}
.table-layout {
    box-shadow: $shadow-border-light;
}
</style>

<template>
    <div class="son-app">
        <div class="tool-layout">
            <span>当前用户群数：15</span>
            <div class="search-and-button">
                <el-input placeholder="搜索用户群" prefix-icon="el-icon-search"
                    v-model="searchUserGroup" style="width:200px;margin-right:15px;"></el-input>
                <el-button type="primary" @click="showCreateUserGroupDialog()">
                    创建用户群
                </el-button>
            </div>
        </div>
        <div class="table-layout">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="state" label="状态" width="180"></el-table-column>
                <el-table-column prop="groupName" label="分群名称" width="180"></el-table-column>
                <el-table-column prop="groupSize" label="分群人数"></el-table-column>
                <!-- <el-table-column prop="operation" label="操作"></el-table-column> -->
            </el-table>
        </div>
        <!-- 新建用户群对话框 -->
        <UserGroupDialog :show="show"
        @closeCreateUserGroupDialog="closeCreateUserGroupDialog"></UserGroupDialog>
    </div>
</template>

<script>
import UserGroupDialog from '../../../../components/UserGroupDialog/UserGroupDialog.vue';

export default {
    name: 'userGroup',
    data() {
        return {
            show: false,
            searchUserGroup: '',
            tableData: [
                {
                    state: '已启用',
                    groupName: '新用户',
                    groupSize: '3410',
                },
                {
                    state: '已启用',
                    groupName: '活跃用户',
                    groupSize: '1232',
                },
                {
                    state: '已启用',
                    groupName: '连续三天登录用户',
                    groupSize: '173',
                },
                {
                    state: '已启用',
                    groupName: '沉默用户',
                    groupSize: '1504',
                },
            ],
        };
    },
    created() {},
    methods: {
        showCreateUserGroupDialog() {
            this.show = true;
        },
        closeCreateUserGroupDialog() {
            this.show = false;
        },
    },
    computed: {},
    watch: {},
    components: {
        UserGroupDialog,
    },
};
</script>
