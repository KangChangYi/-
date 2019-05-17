<template>
    <div class="index-attribute-box">
        <div style="margin-right:10px;">按</div>
        <el-select @change="changeSelectAttribute()" v-model="selectedAttribute"
            placeholder="请选择属性" clearable >
            <el-option v-for="item in attribute" :key="item.value" :value="item.value" >
            </el-option>
        </el-select>
        <div style="margin-left:10px;">细分</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
// import { getAttribute } from '../../api/user';

export default {
    name: 'AttributeSelector',
    data() {
        return {
            selectedAttribute: '',
        };
    },
    created() { },
    methods: {
        changeSelectAttribute() {
            // 改变属性选择
            this.$emit('changeSelectAttribute', this.selectedAttribute);
        },
    },
    computed: mapState([
        'attribute',
    ]),
    watch: {},
    components: {},
};
</script>

<style lang='scss' scoped>
.index-attribute-box {
    margin-left: 20px;
    @include displayCenter($justify-content: flex-start);
}
</style>
