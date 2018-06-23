<template>
    <div class="mine">
        <div class="bg">
            <header class="mineHeader">
            <i class="icon iconfont icon-iconfonticonfontjixieqimo"></i>
            <span>我的717商城</span>
                <i class="icon iconfont icon-xiaoxi"></i>
            </header>
            <div class="top">
                <div class="img">
                    <img src="../../../static/img/portrait.png" alt="">
                    <p>路飞</p>
                </div>
            </div>
        </div>
        
        <div class="shop">
            <span>
                <i class="icon iconfont icon-shop"></i>
                我的店铺
            </span>
            <i class="iconyou iconfont icon-xiangyou"></i>
        </div>
        <ul class="order">
            <li>
                <i class="icon iconfont icon-daifukuan01"></i>
                <span>待付款</span>
            </li>
            <li>
               <i class="icon iconfont icon-icon2"></i>
                <span>待发货</span>
            </li>
            <li>
                <i class="icon iconfont icon-daishouhuo"></i>
                <span>代收货</span>
            </li>
            <li>
                <i class="icon iconfont icon-shouhou"></i>
                <span>售后</span>
            </li>
            <li>
                <i class="icon iconfont icon-dingdan" @click="goOrder"></i>
                <span>我的订单</span>
            </li>
        </ul>
        <ul class="list">
            <li>
                <p>
                   <i class="icon iconfont icon-zhanghuyue"></i>
                    <span>账号余额</span>
                    <i class="icon iconfont icon-lou"></i>
                </p>
                <i class="icon iconfont icon-xiangyou"></i>
            </li>
            <li>
                <p>
                    <i class="icon iconfont icon-dizhiguanli"></i>
                    <span>地址管理</span>
                </p>
                <i class="icon iconfont icon-xiangyou"></i>
            </li>
            <li>
                <p>
                    <i class="icon iconfont icon-wodekefu"></i>
                    <span>我的客服</span>
                </p>
                <i class="icon iconfont icon-xiangyou"></i>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    methods:{
        goOrder(){
            this.$router.push("/order")
        }
    }
}
</script>
<style scoped src="./mine.css">

</style>
