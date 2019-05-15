<style lang='scss' scoped>
@import "../../../styles/public.scss";
.condition{
    width:100%;
    background:#f3f3f3;
    float: left;
    padding:10px;
    padding-left:50px;
    margin:5px 0 5px 0;
    box-sizing: border-box;
    span{
        color:$text-color-primary;
        font-weight: bold;
        line-height:35px;
        float: left;
        margin-right:7px;
    }
    div{
        line-height: 35px;
        float: left;
    }
}
.el-icon-close{
    font-size:20px;
    line-height: 35px;
    float:right;
    &:hover{
        color:#F56C6C;
    }
}
</style>

<template>
    <div class="condition">
        <span>{{conditionTitle}}</span>
        <div v-if="this.conditionTitle === '做过'">
            <el-select style="width:150px;margin-right:7px;" v-model="event" placeholder="事件">
                <el-option v-for="item in events" :key="item.value" :label="item.value"
                 :value="item.value">
                 </el-option>
            </el-select>
            <el-select style="width:100px;margin-right:7px;" v-model="compare" placeholder="比较">
                <el-option v-for="item in compares" :key="item.value" :label="item.label"
                 :value="item.value">
                 </el-option>
            </el-select>
            <el-input style="width:100px" v-model="times" placeholder="触发次数"></el-input>
             次
        </div>


        <div v-if="this.conditionTitle === '新增于'">
            <el-select style="width:150px;margin-right:7px;" v-model="when" placeholder="最近">
                <el-option v-for="item in timeArea" :key="item.value" :label="item.value"
                 :value="item.value">
                 </el-option>
            </el-select>
            <el-input style="width:100px" v-model="day" placeholder="天数"></el-input>
             天
        </div>


        <div v-if="this.conditionTitle === '活跃于'">
             <el-select style="width:150px;margin-right:7px;" v-model="when" placeholder="最近">
                <el-option v-for="item in timeArea" :key="item.value" :label="item.value"
                 :value="item.value">
                 </el-option>
            </el-select>
            <el-input style="width:100px" v-model="day" placeholder="天数"></el-input>
             天
        </div>

        <div v-if="this.conditionTitle === '用户属性满足'">
            <el-select style="width:150px;margin-right:7px;" v-model="attribute" placeholder="属性">
                <el-option v-for="item in attributes" :key="item.value" :label="item.value"
                 :value="item.value">
                 </el-option>
            </el-select>
            <el-select style="width:100px;margin-right:7px;" v-model="condition" placeholder="是">
                <el-option v-for="item in conditions" :key="item.value" :label="item.value"
                 :value="item.value">
                 </el-option>
            </el-select>
            <el-input style="width:100px" v-model="conditionText" placeholder="请输入内容"></el-input>
        </div>
        <i class="el-icon-close" @click="deleteConditionCell()"></i>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'defineButton',
    data() {
        return {
            event: '',
            compare: '>',
            compares: [{ value: '>' },
                { value: '=' },
                { value: '<' },
                { value: '>=' },
                { value: '<=' },
                { value: '≠' }],
            times: '1',
            timeArea: [{ value: '最近' }, { value: '固定时段' }],
            when: '最近',
            day: '',
            attribute: '浏览器品牌',
            attributes: [
                { value: '浏览器品牌' },
                { value: '浏览器版本' },
                { value: '操作系统' },
                { value: '访问机型' },
                { value: '来源域名' },
                { value: '屏幕高度' },
                { value: '屏幕宽度' },
                { value: 'IP' },
                { value: '城市' },
                { value: '省份' },
            ],
            condition: '是',
            conditions: [{ value: '是' },
                { value: '包含' },
                { value: '不是' },
                { value: '不包含' },
                { value: '是空值' },
                { value: '不是空值' },
            ],
            conditionText: '',
        };
    },
    props: {
        conditionType: Array,
        number: String,
    },
    created() {
        console.log(this.conditionType);
    },
    methods: {
        deleteConditionCell() {
            this.$emit('deleteConditionCell', this.number);
        },
    },
    computed: {
        ...mapState([
            'events',
        ]),
        conditionTitle() {
            if (this.number === '1') {
                return this.conditionType[0];
            }
            if (this.number === '2') {
                return this.conditionType[1];
            }
            if (this.number === '3') {
                return this.conditionType[2];
            }
            return '做过';
        },
    },
    watch: {
    },
    components: { },
};
</script>
