<style lang='scss' scoped>
@import "../../../../styles/public.scss";
.son-app {
    height: 100px;
}

</style>

<template>
    <div class="son-app">
        <svg-icon icon-class="svg1"></svg-icon>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            isShow: false,
        };
    },
    created() { },
    methods: {
        clickButton() {
            this.isShow = !this.isShow;
        },
    },
    computed: {},
    watch: {},
    components: {},
};
</script>
