<template>
    <div class="detail">
        <div class="detailHeader">
            <i class="iconfont icon-fanhui" @click="back"></i>
            <h3>商品</h3>
            <i class="iconfont icon-xiaoxi"></i>
        </div>
        <div class="detailSection">
            <dl>
                <dt>
                    <img v-lazy="$route.query.img" alt="">
                </dt>
                <dd>
                    {{decodeURI($route.query.name)}}
                </dd>
            </dl>
        </div>
        <div class="detialFooter">
            <div class="left">
                价格：￥ <span>{{$route.query.pri}}</span>
            </div>
            <div class="right">
                <span class="detailCart">加入购物车</span>
                <span class="detailBuy">立即购买</span>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            window.history.go(-1)
        }
    }
}
</script>
<style src="./detail.css" scoped>

</style>

