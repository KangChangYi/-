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
            <el-select style="width:150px;margin-right:7px;" v-model="value" placeholder="事件">
                <el-option v-for="item in options" :key="item.value" :label="item.label"
                 :value="item.value">
                 </el-option>
            </el-select>
            <el-select style="width:100px;margin-right:7px;" v-model="value" placeholder="比较">
                <el-option v-for="item in options" :key="item.value" :label="item.label"
                 :value="item.value">
                 </el-option>
            </el-select>
            <el-input style="width:100px" v-model="input" placeholder="请输入内容"></el-input>
             次
        </div>


        <div v-if="this.conditionTitle === '新增于'">
            <el-select style="width:150px;margin-right:7px;" v-model="value" placeholder="最近">
                <el-option v-for="item in options" :key="item.value" :label="item.label"
                 :value="item.value">
                 </el-option>
            </el-select>
            <el-input style="width:100px" v-model="input" placeholder="请输入内容"></el-input>
             天
        </div>


        <div v-if="this.conditionTitle === '活跃于'">
             <el-select style="width:150px;margin-right:7px;" v-model="value" placeholder="最近">
                <el-option v-for="item in options" :key="item.value" :label="item.label"
                 :value="item.value">
                 </el-option>
            </el-select>
            <el-input style="width:100px" v-model="input" placeholder="请输入内容"></el-input>
             天
        </div>

        <div v-if="this.conditionTitle === '用户属性满足'">
            <el-select style="width:150px;margin-right:7px;" v-model="value" placeholder="属性">
                <el-option v-for="item in options" :key="item.value" :label="item.label"
                 :value="item.value">
                 </el-option>
            </el-select>
            <el-select style="width:100px;margin-right:7px;" v-model="value" placeholder="是">
                <el-option v-for="item in options" :key="item.value" :label="item.label"
                 :value="item.value">
                 </el-option>
            </el-select>
            <el-input style="width:100px" v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <i class="el-icon-close" @click="deleteConditionCell()"></i>
    </div>
</template>

<script>
export default {
    name: 'defineButton',
    data() {
        return {
        };
    },
    props: {
        conditionType: Array,
        number: Number,
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
