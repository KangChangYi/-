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
            <span>当前用户群数：{{userGroupSize}}</span>
            <div class="search-and-button">
                <el-input placeholder="搜索用户群" prefix-icon="el-icon-search"
                    v-model="searchUserGroup" style="width:200px;margin-right:15px;"
                    @change="changeSearchText"
                >
                </el-input>
                <el-button type="primary" @click="showCreateUserGroupDialog()">
                    创建用户群
                </el-button>
            </div>
        </div>
        <div class="table-layout" v-loading="loading">
            <el-table :data="userGroupForSearch"  style="width: 100%">
                <el-table-column prop="enable" label="状态" width="180"></el-table-column>
                <el-table-column prop="value" label="分群名称" width="180"></el-table-column>
                <el-table-column prop="number" label="分群人数" width="180"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="danger" size="mini" v-if="scope.row.enable === '已启用'"
                        @click="clickProhibit(scope.$index)">
                            禁用
                        </el-button>
                        <el-button type="success" size="mini" v-if="scope.row.enable === '已禁用'"
                        @click="clickEnable(scope.$index)">
                            启用
                        </el-button>
                    </template>
                </el-table-column>
                <!-- <el-table-column prop="operation" label="操作"></el-table-column> -->
            </el-table>
        </div>
        <!-- 新建用户群对话框 -->
        <UserGroupDialog ref="Dialog"></UserGroupDialog>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { setTimeout } from 'timers';
import UserGroupDialog from '../../../../components/UserGroupDialog/index.vue';

export default {
    name: 'userGroup',
    data() {
        return {
            userGroupForSearch: [
                { enable: '已启用', value: '所有用户', number: 3410 },
                { enable: '已启用', value: '最近7天付款用户', number: 1295 },
                { enable: '已启用', value: '余额100以内用户', number: 578 },
                { enable: '已启用', value: '沉默用户', number: 302 },
            ],
            userGroupSize: 5,
            searchUserGroup: '',
            loading: false,
        };
    },
    created() {
        this.userGroupForSearch = this.$store.state.userGroup;
    },
    mounted() {
    },
    methods: {
        showCreateUserGroupDialog() {
            this.$refs.Dialog.showCreateUserGroup();
        },
        changeSearchText(value) {
            this.loading = true;
            setTimeout(() => {
                if (!value) {
                    this.userGroupForSearch = this.userGroup;
                } else {
                    this.userGroupForSearch = this.userGroupForSearch
                        .filter(res => res.value === value);
                }
                this.loading = false;
            }, 300);
        },
        clickProhibit(index) {
            this.userGroupForSearch[index].enable = '已禁用';
        },
        clickEnable(index) {
            this.userGroupForSearch[index].enable = '已启用';
        },
    },
    computed: {
        ...mapState([
            'userGroup',
        ]),
    },
    watch: {
        userGroup(newValue) {
            this.userGroupForSearch = newValue;
            this.userGroupSize = newValue.length;
        },
    },
    components: {
        UserGroupDialog,
    },
};
</script>
