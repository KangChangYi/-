<style lang='scss' scoped>
@import "../../styles/public.scss";
.index-select-box {
    @include displayCenter($justify-content: flex-start);
}
</style>

<template>
    <div class="index-select-box">
        <div>{{belong === "event" ? "事件" : "指标"}}：</div>

        <!-- 整体分析时 -->
        <el-select @change="changeSelectIndex()" v-model="selectedIndex"
         v-if="belong === 'whole'" placeholder="请选择指标分组" >
            <el-option v-for="item in index_group_option" :key="item.value"
                :value="item.value">
             </el-option>
        </el-select>

        <!-- 事件分析时 -->
        <el-select @change="changeSelectEvent()" v-model="selectedEvent"
         v-if="belong === 'event'" placeholder="请选择指标分组" >
            <el-option v-for="item in event_group_option" :key="item.value"
                :value="item.value">
             </el-option>
        </el-select>

        <AttributeSelector @changeSelectAttribute="changeSelectAttribute"></AttributeSelector>
    </div>
</template>

<script>
import { mapState } from 'vuex';
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
            selectedEvent: '登录',
            index_group_option: [
                // { value: '浏览量（PV）' },
            ],
            // event_group_option: [
            // ],
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
        // 改变指标
        changeSelectEvent() {
            if (this.belong) {
                this.$store.commit('changeIndex', {
                    page: this.belong,
                    value: this.selectedEvent,
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
    computed: mapState({
        event_group_option(state) {
            return state.events;
        },
    }),
    watch: {},
    components: {
        AttributeSelector,
    },
};
</script>
