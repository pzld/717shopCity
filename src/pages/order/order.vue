<template>
    <div class="order">
        <div class="orderHeader">
            <i class="iconfont icon-fanhui" @click="back"></i>
            <h3>我的订单</h3>
            <i class="iconfont icon-xiaoxi"></i>
        </div>
        <div class="orderNav">
            <router-link tag="span" to="/order/all">全部</router-link>
            <router-link tag="span" to="/order/nopay">待付款</router-link>
            <router-link tag="span" to="/order/nodelivery">待发货</router-link>
            <router-link tag="span" to="/order/noreceived">待收货</router-link>
            <router-link tag="span" to="/order/afterSale">售后</router-link>
        </div>
        <div class="orderont">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            this.$router.push('/home/mine')
        }
    }
}
</script>
<style scoped src="./order.css">

</style>
