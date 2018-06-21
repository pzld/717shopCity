<template>
    <div class="cart">
        <div class="cartHeader">
            <i class="iconfont icon-fanhui" @click="back"></i>
            <h3>商品</h3>
            <span>编辑</span>
        </div>
        <div class="cartSection">
            <div v-for="(v,i) in goodsMsg" :key="i" class="cartList">
                <checkBox/>
                <img :src="v.img" alt="" class="cartImg">
                <div class="cartLast">
                    <span>{{v.name}}</span>
                    <div class="cartBottom">
                        <b>￥{{v.pri}}</b>
                        <cartCont/>
                    </div>
                </div>
            </div>
        </div>
        <div class="cartFooter">
            <div class="left">
                <i :class="checked?'iconfont icon-xuanzekuangxuanzhong':'iconfont icon-xuanzekuangmoren'" @click="checked=!checked"></i>
                全选
            </div>
            <div class="right">
                <b class="sum">￥100</b>
                <span class="pay">结算</span>
            </div>
        </div>
    </div>
</template>
<script>
import cartCont from '../../components/cartCont/cartCont';
import checkBox from '../../components/checkbox/checkbox';
export default {
    data(){
        return{
            goodsMsg:[],
            checked:false
        }
    },
    methods:{
       back(){
            window.history.go(-1)
        },
    },
    mounted(){
        this.goodsMsg = JSON.parse(localStorage.getItem('goodsMsg'))
    },
    components:{
        cartCont,
        checkBox
    }
}
</script>
<style src="./cart.css">

</style>
