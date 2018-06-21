<template>
    <div class="register">
        <div class="registerHeader">
            <p class="back" @click="back"><i class="iconfont icon-fanhui"></i>返回</p>
            <h3>注册</h3>
            <span @click="goSignin">登录</span>
        </div>
        <div class="registerSection">
            <div class="registerIpt">
                <p class="phone">
                    <img src="../../../assets/icon_phone.png" alt="">
                    <input type="text" placeholder="手机号码" v-model="phone">
                </p>
                <p class="vCode">
                    <img src="../../../assets/icon_code.png" alt="">
                    <input type="text" placeholder="短信验证码" class="vCodeIpt" v-model="vCodeCont">
                    <span @click="getVCode">{{getVCodeText}}</span>
                </p>
                <p class="pwd">
                    <img src="../../../assets/icon_code.png" alt="">
                    <input type="password" placeholder="密码" v-model="pwd">
                </p>
                <div class="registerBtn">
                    <span @click="register">立即注册</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            getVCodeText:"获取验证码",
            phone:'',
            vCode:'',
            vCodeCont:'',
            flag:true,
            pwd:''
        }
    },
    methods:{
        goSignin(){
            this.$router.push('/signin')
        },
        getVCode(){
            if(this.flag){
                let reg = /^1[3578]\d{9}$/;
                if(reg.test(this.phone)){
                    sessionStorage.setItem('phone',this.phone)
                    this.flag = false
                    this.vCode = Math.random(0,1).toString().substr(2,6)
                    console.log(this.vCode)
                    let n = 10;
                    let timer = setInterval(()=>{
                        n--
                        this.getVCodeText = n+'s后重新发送'
                        if(n==0){
                            this.flag = true
                            this.getVCodeText = '重新发送'
                            clearInterval(timer)
                        }
                    },1000)
                }else{
                    alert('请输入正确的手机号码')
                }
            }
        },
        register(){
            if(this.vCode==''){
                alert('请输入验证码')
            }else{
                if(this.vCodeCont !== this.vCode){
                    alert('验证码错误')
                }else{
                    if(this.pwd === ''){
                        alert('请输入密码')
                    }else{
                        sessionStorage.setItem('phone',this.phone)
                        sessionStorage.setItem('pwd',this.pwd)
                    }
                }
            }
            this.$router.push('/signin')
        },
        back(){
            window.history.go(-1)
        }
    }
}
</script>
<style src="./register.css" scoped>

</style>

