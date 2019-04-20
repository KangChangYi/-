<style lang='scss' scoped>
@import "../styles/public.scss";
.son-app {
  margin-bottom: 15px;
  padding: 15px 20px;
  background: white;
  box-shadow: $box-shadow-base;
  //  box-shadow: $shadow-border-light;
  border-radius: 3px;
  cursor: pointer;
  .user-group-select-box {
    @include displayCenter($justify-content:flex-start);
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

<template>
  <div class="son-app" @click="clickShowUserGroupSelect()">
    <div class="user-group-select-box">
      <div class="option-title">分析用户群：</div>
      <el-select
        @change="changeSelectUserGroup()"
        v-model="selectedUserGroup"
        multiple
        placeholder="请选择"
        v-if="isShowUserGroupSelect"
      >
        <el-option v-for="item in user_group_option" :key="item.value"
        :value="item.value"></el-option>
      </el-select>
      <el-button type="text" @click.stop="clickCreateUserGroup()" v-if="isShowUserGroupSelect">
        <i class="el-icon-circle-plus-outline" style="margin-left:8px"></i> 新建用户群
      </el-button>
      <div class="selected-user-group-content" v-for="item in selectedUserGroup" :key="item" v-else>
        <img src="../assets/image/icon-user-group.png" style="width:20px;height:20px;">
        {{item}}
      </div>
    </div>
    <el-button
      type="primary"
      size="small"
      style="margin-top:15px;"
      @click.stop="clickConfirm()"
      v-if="isShowUserGroupSelect"
    >确定</el-button>
  </div>
</template>

<script>
export default {
    name: 'userGroupSelect',
    data() {
        return {
            isShowUserGroupSelect: false,
            selectedUserGroup: ['所有用户'],
            user_group_option: [
                { value: '所有用户' },
                { value: '活跃用户' },
                { value: '沉默用户' },
            ],
        };
    },
    created() {},
    methods: {
        clickShowUserGroupSelect() {
            if (this.isShowUserGroupSelect) return;
            this.isShowUserGroupSelect = true;
        },
        clickConfirm() {
            this.isShowUserGroupSelect = false;
        },
        changeSelectUserGroup() {
            // 选择用户群改变
        },
        clickCreateUserGroup() {
            // 新建用户群
        },
    },
    computed: {},
    watch: {
        selectedUserGroup(newValue) {
            if (newValue.length === 0) {
                this.selectedUserGroup.push('所有用户');
            }
        },
    },
    components: {},
};
</script>
