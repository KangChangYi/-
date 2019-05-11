<style lang='scss' scoped>
@import "../../styles/public.scss";
.index-select-box {
    @include displayCenter($justify-content: flex-start);
}
</style>

<template>
    <div class="index-select-box">
        <div>指标：</div>
        <el-select @change="changeSelectIndex()" v-model="selectedIndex"
        placeholder="请选择指标分组" >
            <el-option v-for="item in index_group_option" :key="item.value"
                :value="item.value">
             </el-option>
        </el-select>
        <AttributeSelector @changeSelectAttribute="changeSelectAttribute"></AttributeSelector>
    </div>
</template>

<script>
// import { mapState } from 'vuex';
import AttributeSelector from '../AttributeSelector/index.vue';
// 接口
import { getIndexGroupOption } from '../../api/wholeAnalysis';

export default {
    name: 'IndexSelector',
    props: {
        belong: String,
    },
    data() {
        return {
            selectedIndex: '新增用户',
            index_group_option: [
                // { value: '浏览量（PV）' },
            ],
        };
    },
    created() {
        // 获取指标数据
        getIndexGroupOption().then((res) => {
            this.index_group_option = res.data.indexGroupOption;
            // console.log(res.data.indexGroupOption);
        });
    },
    methods: {
        // 改变指标
        changeSelectIndex() {
            if (this.belong) {
                this.$store.commit('changeIndex', {
                    page: this.belong,
                    value: this.selectedIndex,
                });
            }
        },
        // 改变属性选择
        changeSelectAttribute(attribute) {
            if (this.belong) {
                this.$store.commit('changeAttribute', {
                    page: this.belong,
                    value: attribute,
                });
            }
        },
    },
    // computed: mapState({
    //     selectedIndex: state => state.index,
    // }),
    watch: {},
    components: {
        AttributeSelector,
    },
};
</script>
