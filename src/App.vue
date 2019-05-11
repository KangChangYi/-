
<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
// 引入mock
require('./mock/index.js');

export default {
    name: 'app',
    data() {
        return {};
    },
    created() { },
    computed: {},
    watch: {},
    components: {},
};
</script>
