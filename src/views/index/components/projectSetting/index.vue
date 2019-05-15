<template>
  <div class="son-app">
      <div class="project-setting-layout">
          <div class="column">
              <div class="text"> 应用名称 </div>
              <div class="content">
                  <el-input v-model="appName" placeholder="应用名称"></el-input>
              </div>
          </div>
          <div class="column">
              <div class="text"> 应用ID </div>
              <div class="content">
                  <label>35510</label>
              </div>
          </div>
          <div class="column">
              <el-button type="primary" @click="clickSave()">保存</el-button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'logiprojectSettingn',
    data() {
        return {
            appName: '理财',
        };
    },
    created() {},
    methods: {
        clickSave() {
            this.$message.success('保存成功');
        },
    },
    computed: {},
    watch: {},
    components: {},
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
.project-setting-layout {
    @include layout-base;
    height:80vh;
}
.column {
    @include displayCenter($justify-content:flex-start);
    .text {
        width: 68px;
    }
    .content {
        width: 250px;
    }
}
.column + .column {
    margin-top: 50px;
}
</style>
