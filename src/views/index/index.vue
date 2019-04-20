<style lang='scss' scoped>
@import "../../styles/public.scss";
.app {
    display: flex;
    .layout {
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
        .header-layout {
            width: calc(100% - 17px);
            min-width: 1200px;
            height: 55px;
            background: white;
            position: fixed;
            z-index: 20;
            left: 0;
            box-shadow: $shadow-border;
            @include displayCenter($justify-content:space-between);
            .header-left-indent-box {
                width: 55px;
                height: 55px;
                // margin-left跟随收缩导航栏变化 导航栏宽度为：200/64
                margin-left: 200px;
                cursor: pointer;
                transition: margin-left 0.3s ease-in-out;
                @include displayCenter();
                &:hover {
                    background: #f1f1f1;
                }
            }
            .header-right-box {
                width: fit-content;
                height: 55px;
                padding-right: 20px;
                @include displayCenter($justify-content:space-around);
                .user-avatar-box {
                    cursor: pointer;
                    transition: all 0.2s;
                    width: 60px;
                    height: 55px;
                    @include displayCenter($justify-content:space-between);
                    &:hover {
                        background: #f5f5f5;
                    }
                    img {
                        margin-left: 5px;
                    }
                }
            }
        }
        .content-layout {
            margin-top: 55px;
            padding: 20px;
            #page-title {
                font-size: $font-size-extra-large;
                font-weight: bold;
                color: #464c5b;
                margin-bottom: 20px;
            }
        }
    }
}
.header-width-large {
    margin-left: 64px !important;
}
</style>

<template>
    <div class="app">
        <!-- 侧边导航栏组件 -->
        <naviMenu :isCollapse="isCollapse"></naviMenu>
        <!-- 内容 -->
        <div class="layout">
            <!-- header -->
            <div class="header-layout">
                <div
                    class="header-left-indent-box"
                    :class="[isCollapse ? header_css_width_large : '']"
                    @click="clickLeftIndent()"
                >
                    <img
                        v-if="!isCollapse"
                        src="../../assets/image/icon-left-indent.png"
                    >
                    <img
                        v-else
                        src="../../assets/image/icon-right-indent.png"
                    >
                </div>
                <div class="header-right-box">
                    <!-- 头像下拉菜单 -->
                    <el-dropdown @command="clickDropDown">
                        <div class="user-avatar-box">
                            <img src="../../assets/image/icon-avatar.png">
                            <i class="el-icon-caret-bottom"></i>
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="modifyPassWord">修改密码</el-dropdown-item>
                            <el-dropdown-item
                                command="logOut"
                                divided
                            >
                                <span style="color:#F56C6C">退出登录</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <!-- content -->
            <div class="content-layout">
                <div id="page-title">{{pageTitle}}</div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import naviMenu from './components/naviMenu/naviMenu.vue';

const titleMap = new Map();
titleMap
    .set('seeBoard', '看板')
    .set('receiveVisitor', '获客渠道')
    .set('wholeAnalysis', '整体分析')
    .set('eventAnalysis', '事件分析')
    .set('flowAnalysis', '流量分析')
    .set('terminalAnalysis', '终端分析')
    .set('funnelAnalysis', '漏斗分析')
    .set('retainAnalysis', '留存分析')
    .set('userGroup', '用户群')
    .set('userPortrait', '用户画像');
export default {
    name: 'index',
    data() {
        return {
            // header动态样式
            header_css_width_large: 'header-width-large',
            // 导航栏是否收缩
            isCollapse: false,
            pageTitle: '看板',
        };
    },
    created() { },
    methods: {
        clickLeftIndent() {
            this.isCollapse = !this.isCollapse;
        },
        clickDropDown(command) {
            if (command === 'logOut') {
                this.$confirm('即将退出登录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                })
                    .then(() => {
                        this.$router.push({ name: 'login' });
                    })
                    .catch(() => {
                        this.$message('取消登出!');
                    });
            }
        },
    },
    computed: {},
    watch: {},
    components: { naviMenu },
    // 路由更新时改变pageTitle
    beforeRouteUpdate(to, from, next) {
        this.pageTitle = titleMap.get(to.name);
        next();
    },
};

</script>
