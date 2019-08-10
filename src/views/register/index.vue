<template>
    <div class="app">
        <div class="logo-layout">
            <img src="../../assets/image/logo.png">
        </div>
        <div class="login-form-layout">
            <div class="form-item">
                <div id="title">用户名</div>
                <el-input placeholder="请输入用户名" @focus="focusInput()"
                    v-model="loginForm.userName" >
                    <img slot="prefix" class="input-icon"
                    src="../../assets/image/icon-userName.png" >
                    <div slot="suffix" class="tip-text" v-if="isFormDataError" >
                        {{FormDataErrorText}}
                    </div>
                </el-input>
            </div>

            <div class="form-item">
                <div id="title">密码</div>
                <el-input placeholder="请输入密码" type="password" @focus="focusInput()"
                 v-model="loginForm.passWord">
                    <img slot="prefix" class="input-icon"
                    src="../../assets/image/icon-passWord.png" >
                </el-input>
            </div>

            <div class="form-item">
                <div id="title">确认密码</div>
                <el-input placeholder="请输入确认密码" type="password" @focus="focusInput()"
                 v-model="loginForm.confirmPassWord">
                    <img slot="prefix" class="input-icon"
                    src="../../assets/image/icon-passWord.png" >
                </el-input>
            </div>

            <div class="form-item" style="padding-top:25px">
                <el-button style="width:100%" type="primary" @click="login()">
                    <span style="font-size:16px">注册</span>
                </el-button>
            </div>

            <div class="form-item" style="padding-bottom:10px">
                <div class="forget-password-font" @click="clickGoToLogin()">已有账号，去登陆</div>
            </div>
        </div>
        <div class="studio-font-layout">@仙人指路</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'register',
    data() {
        return {
            loginForm: {
                userName: '',
                passWord: '',
                confirmPassWord: '',
            },
            isAutoLogin: false,
            isFormDataError: false,
            FormDataErrorText: '',
        };
    },
    created() { },
    methods: {
        login() {
            const { userName, passWord } = this.loginForm;
            if (userName === '' || passWord === '') {
                this.isFormDataError = true;
                this.FormDataErrorText = '用户名或密码不能为空';
                return;
            }
            if (userName !== this.userName || passWord !== this.passWord) {
                this.isFormDataError = true;
                this.FormDataErrorText = '用户名或密码错误';
                return;
            }
            this.isLogin = true;
            this.$router.push({
                name: 'index',
            });
        },
        focusInput() {
            this.isFormDataError = false;
        },
        clickAutoLogin() {
            this.isAutoLogin = !this.isAutoLogin;
        },
        clickGoToLogin() {
            this.$router.push({
                name: 'login',
            });
        },
    },

    computed: mapState([
        'isLogin',
        'userName',
        'passWord',
    ]),
    watch: {},
    components: {},
};
</script>

<style lang='scss' scoped>
.app {
    padding-top: 50px;
    background: $base-color;
}
.logo-layout {
    width: fit-content;
    margin: auto;
    img {
        width: 230px;
        height: 230px;
    }
}
.login-form-layout {
    width: 480px;
    height: fit-content;
    background: white;
    margin: auto;
    padding: 40px 0 20px 0;
    border-radius: 3px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    .form-item {
        width: 80%;
        margin: auto;
        margin-bottom: 20px;
        color: $text-color-base;
        #title {
            padding-bottom: 5px;
        }
        .input-icon {
            width: 18px;
            height: 18px;
            padding: 10px 0 0 3px;
        }
        .forget-password-font {
            color: $text-color-secondary;
            float: right;
            cursor: pointer;
            &:hover {
                color: inherit;
            }
        }
    }
}
.tip-text {
    width: fit-content;
    margin: auto;
    padding: 10px 5px 0 0;
    color: #f56c6c;
}
.studio-font-layout {
    width: fit-content;
    color: white;
    margin: auto;
    margin-top: 70px;
}
</style>
