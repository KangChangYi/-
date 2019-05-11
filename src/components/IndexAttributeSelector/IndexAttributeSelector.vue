<style lang='scss' scoped>
@import "../../styles/public.scss";
.index-select-box {
    @include displayCenter($justify-content: flex-start);
    .index-attribute-box {
        margin-left: 20px;
        @include displayCenter($justify-content: flex-start);
    }
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
        <div class="index-attribute-box">
            <div style="margin-right:10px;">按</div>
                <el-select @change="changeSelectAttribute()" v-model="selectedAttribute"
                  placeholder="请选择属性" clearable>
                    <el-option
                        v-for="item in attribute"
                        :key="item.value"
                        :value="item.value"
                    ></el-option>
                </el-select>
            <div style="margin-left:10px;">细分</div>
        </div>
    </div>
</template>

<script>
// 接口
import { getIndexGroupOption } from '../../api/wholeAnalysis';
import { getAttribute } from '../../api/user';

export default {
    name: 'IndexAttributeSelector',
    data() {
        return {
            selectedIndex: '新增用户',
            selectedAttribute: '',
            index_group_option: [
                // { value: '浏览量（PV）' },
            ],
            attribute: [
                // { value: '浏览器品牌' }
            ],
        };
    },
    created() {
        // 获取指标数据
        getIndexGroupOption().then((res) => {
            this.index_group_option = res.data.indexGroupOption;
            console.log(res.data.indexGroupOption);
        });
        // 获取用户属性
        getAttribute().then((res) => {
            this.attribute = res.data.attribute;
            console.log(res.data.attribute);
        });
    },
    methods: {
        changeSelectIndex() {
            // 改变指标
            this.$emit('changeSelectIndex', this.selectedIndex);
        },
        changeSelectAttribute() {
            // 改变属性选择
            this.$emit('changeSelectAttribute', this.selectedAttribute);
        },
    },
    computed: {},
    watch: {},
    components: {},
};
</script>
