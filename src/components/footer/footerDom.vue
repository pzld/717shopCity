<template>
    <footer>
        <router-link to="/home/index" tag="span"><i class="iconfont icon-home"></i> 首页</router-link>
        <router-link to="/home/classify" tag="span"><i class="iconfont icon-fenlei"></i> 分类</router-link>
        <router-link to="/home/social" tag="span"><i class="iconfont icon-shejiao"></i> 社交</router-link>
        <router-link to="/home/cart" tag="span"><i class="iconfont icon-gouwuche"></i> 购物车</router-link>
        <router-link to="/home/mine" tag="span"><i class="iconfont icon-weibiaoti2fuzhi12"></i> 我的</router-link>
    </footer>
</template>
<script>
import '../../../static/font/iconfont.css'
import './footer.css'
export default {
    name:'footerDom',
}
</script>
<style>

</style>


