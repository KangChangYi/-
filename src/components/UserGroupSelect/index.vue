
<template>
    <div class="son-app" @click="clickShowUserGroupSelect()" >
        <div class="user-group-select-box">
            <div class="option-title">分析用户群：</div>
            <el-select
                v-model="selectedUserGroup"
                :multiple="!isMultiple ? false : true"
                :multiple-limit="multipleLimit" placeholder="请选择"
                v-if="isShowUserGroupSelect" >
                <el-option v-for="item in userGroup" :key="item.value" :value="item.value" >
                </el-option>
            </el-select>
            <el-button type="text" @click.stop="showCreateUserGroupDialog()"
                 v-if="isShowUserGroupSelect">
                <i class="el-icon-circle-plus-outline" style="margin-left:8px" ></i>
                新建用户群
            </el-button>
            <div class="selected-user-group-content" v-for="item in selectedUserGroup" :key="item"
                v-else>
                <img v-if="isMultiple" src="../../assets/image/icon-user-group.png"
                 style="width:20px;height:20px;">
                {{item}}
            </div>
        </div>
        <el-button type="primary"  size="small" style="margin-top:15px;"
            @click.stop="clickConfirm()" v-if="isShowUserGroupSelect" >确定
        </el-button>
        <!-- 新建用户群对话框 -->
        <UserGroupDialog ref="Dialog"></UserGroupDialog>
    </div>
</template>

<script>
import { mapState } from 'vuex';
// import { getUserGroup } from '../../api/userGroup';
import UserGroupDialog from '../UserGroupDialog/index.vue';

export default {
    name: 'userGroupSelect',
    props: {
        isMultiple: {
            default: true,
            type: Boolean,
        },
        belong: String,
    },
    data() {
        return {
            show: false,
            isShowUserGroupSelect: false,
            selectedUserGroup: ['所有用户'],
            // user_group_option: [
            //     // { name: '所有用户' },
            // ],
            // 最大选择数
            multipleLimit: 3,
        };
    },
    created() {
        // getUserGroup().then((res) => {
        //     this.user_group_option = res.data.userGroup;
        //     // console.log('usergourp', res.data.userGroup);
        // });
    },
    methods: {
        clickShowUserGroupSelect() {
            if (this.isShowUserGroupSelect) return;
            this.isShowUserGroupSelect = true;
        },
        // // 选择用户群改变
        // changeSelectUserGroup() {
        //     //  @change="changeSelectUserGroup()"
        // },
        showCreateUserGroupDialog() {
            this.$refs.Dialog.showCreateUserGroup();
        },
        clickConfirm() {
            if (this.belong) {
                this.$store.commit('changeUserGroup', {
                    page: this.belong,
                    value: this.selectedUserGroup,
                });
            }
            this.isShowUserGroupSelect = false;
        },
    },
    computed: mapState([
        'userGroup',
    ]),
    watch: {
        selectedUserGroup(newValue) {
            if (newValue.length === 0) {
                if (this.isMultiple) {
                    this.selectedUserGroup.push('所有用户');
                } else {
                    this.selectedUserGroup = '所有用户';
                }
            }
        },
    },
    components: {
        UserGroupDialog,
    },
};
</script>

<style lang='scss' scoped>
.son-app {
    margin-bottom: 15px;
    padding: 15px 20px;
    background: white;
    box-shadow: $box-shadow-base;
    //  box-shadow: $shadow-border-light;
    border-radius: 3px;
    cursor: pointer;
    .user-group-select-box {
        @include displayCenter($justify-content: flex-start);
        .option-title {
            text-align: right;
        }
        .selected-user-group-content {
            @include displayCenter();
            img {
                margin: 0 5px 0 20px;
            }
        }
    }
}
</style>
