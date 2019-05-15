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
.tool-layout {
    margin-bottom: 15px;
    @include displayCenter($justify-content:space-between);
    .search-and-button {
        @include displayCenter($justify-content:space-between);
    }
}
.table-layout {
    @include layout-base;
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
            <el-table :data="userGroup"  style="width: 100%">
                <el-table-column prop="enable" label="状态" width="180"></el-table-column>
                <el-table-column prop="value" label="分群名称" width="180"></el-table-column>
                <el-table-column prop="number" label="分群人数"></el-table-column>
                <!-- <el-table-column prop="operation" label="操作"></el-table-column> -->
            </el-table>
        </div>
        <!-- 新建用户群对话框 -->
        <UserGroupDialog ref="Dialog"></UserGroupDialog>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import UserGroupDialog from '../../../../components/UserGroupDialog/index.vue';

export default {
    name: 'userGroup',
    data() {
        return {
            searchUserGroup: '',
        };
    },
    created() {},
    mounted() {
        console.log(this.userGroup);
    },
    methods: {
        showCreateUserGroupDialog() {
            this.$refs.Dialog.showCreateUserGroup();
        },
    },
    computed: mapState([
        'userGroup',
    ]),
    watch: { },
    components: {
        UserGroupDialog,
    },
};
</script>
