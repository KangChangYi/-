<style lang='scss' scoped>
@import "../../../../styles/public.scss";
// 不缩进及缩进样式
.el-menu-vertical-demo {
    min-height: 100vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border: none;
    position: relative;
    z-index: 21;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
.menu-icon {
    width: 14px;
    height: 14px;
    padding-right: 16px;
}

// menu hover
.el-submenu {
    .el-menu-item {
        background-color: $navigate-dark-color !important;
        &:hover {
            color: white !important;
            background-color: $navigate-hover-color !important;
        }
    }
}
</style>

<template>
    <div>
        <el-menu
            class="el-menu-vertical-demo"
            background-color="#304156"
            text-color="#bfcbd9"
            :collapse="isCollapse"
            router
        >
            <el-menu-item index="seeBoard">
                <img
                    src="../../../../assets/image/icon-ban.png"
                    class="menu-icon"
                >
                <span slot="title">看板</span>
            </el-menu-item>

            <el-menu-item index="receiveVisitor">
                <img
                    src="../../../../assets/image/icon-edition.png"
                    class="menu-icon"
                >
                <span slot="title">获客渠道</span>
            </el-menu-item>

            <el-submenu index="1">
                <template slot="title">
                    <img
                        src="../../../../assets/image/icon-behavior.png"
                        class="menu-icon"
                    >
                    <span>用户行为分析</span>
                </template>
                <el-menu-item index="wholeAnalysis">整体分析</el-menu-item>
                <el-menu-item index="eventAnalysis">事件分析</el-menu-item>
                <!-- <el-menu-item index="terminalAnalysis">终端分析</el-menu-item> -->
                <!-- <el-menu-item index="funnelAnalysis">漏斗分析</el-menu-item> -->
                <el-menu-item index="retainAnalysis">留存分析</el-menu-item>
            </el-submenu>

            <el-submenu index="2">
                <template slot="title">
                    <img
                        src="../../../../assets/image/icon-user.png"
                        class="menu-icon"
                    >
                    <span>用户</span>
                </template>
                <el-menu-item index="userGroup">用户群</el-menu-item>
                <el-menu-item index="userPortrait">用户画像</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {};
    },
    props: {
        isCollapse: Boolean,
    },
    created() { },
    methods: {},
    computed: {},
    watch: {},
    components: {},
};
</script>
