<template>
  <div class="son-app">
      <div class="project-setting-layout">
          <div class="column">
              <div class="text"> 应用名称 </div>
              <div class="content">
                  <el-input v-model="Name" @change="changeAppName" placeholder="应用名称"></el-input>
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
import { mapState } from 'vuex';

export default {
    name: 'projectSetting',
    data() {
        return {
            Name: '理财',
        };
    },
    created() {
        this.Name = this.$store.state.appName;
    },
    methods: {
        changeAppName(e) {
            this.$store.commit('changeAppName', e);
            console.log(e);
        },
        clickSave() {
            this.$message.success('保存成功');
        },
    },
    computed: mapState([
        'appName',
    ]),
    watch: {
        appName(newValue) {
            this.Name = newValue;
        },
    },
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
