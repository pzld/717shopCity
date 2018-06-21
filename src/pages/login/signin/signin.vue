<template>
    <div class="signin">
        <div class="signinHeader">
            <p class="back" @click="back"><i class="iconfont icon-fanhui"></i>返回</p>
            <h3>登录</h3>
            <span @click="goRegister">注册</span>
        </div>
        <div class="signinSection">
            <div class="signinIpt">
                <p class="phone">
                    <img src="../../../assets/icon_phone.png" alt="">
                    <input type="text" placeholder="手机号码" v-model="phone">
                </p>
                <p class="pwd">
                    <img src="../../../assets/icon_code.png" alt="">
                    <input type="password" placeholder="密码" v-model="pwd">
                </p>
                <div class="signinBtn">
                    <span @click="signin">立即登录</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import './signin.css'
export default {
    data(){
        return {
            phone:'',
            pwd:''
        }
    },
    methods:{
        goRegister(){
            this.$router.push('/register')
        },
        signin(){
            if(this.phone == ''){
                alert('请输入手机号')
            }else{
                if(this.pwd == ''){
                    alert('请输入密码')
                }else{
                    if(this.phone == sessionStorage.getItem('phone') && this.pwd == sessionStorage.getItem('pwd')){
                        sessionStorage.setItem('code',1)
                        this.$router.push('/')
                    }else{
                        alert('用户名或密码错误')
                    }
                }
            }
            
        },
        back(){
            window.history.go(-1)
        }
    }
}
</script>
<style src="./signin.css" scoped>

</style>

