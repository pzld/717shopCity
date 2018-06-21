<template>
    <div class="cart">
        <div class="cartHeader">
            <i class="iconfont icon-fanhui" @click="back"></i>
            <h3>商品</h3>
            <span>编辑</span>
        </div>
        <div class="cartSection">
            <div v-for="(v,i) in goodsMsg" :key="i" class="cartList">
                <checkBox :idx="i" :check="allChecked"/>
                <img :src="v.img" alt="" class="cartImg">
                <div class="cartLast">
                    <span>{{v.name}}</span>
                    <div class="cartBottom">
                        <b>￥{{v.pri}}</b>
                        <cartCont :idx="i"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="cartFooter">
            <div class="left">
                <i :class="allChecked?'iconfont icon-xuanzekuangxuanzhong':'iconfont icon-xuanzekuangmoren'" @click="check"></i>
                全选
            </div>
            <div class="right">
                <b class="sum">￥{{sum}}</b>
                <span class="pay">结算</span>
            </div>
        </div>
    </div>
</template>
<script>
import cartCont from '../../components/cartCont/cartCont';
import checkBox from '../../components/checkbox/checkbox';
import bus from '../../utils/bus.js';
export default {
    data(){
        return{
            goodsMsg:[],
            allChecked:false,
            sum:0
        }
    },
    methods:{
        back(){
            window.history.go(-1)
        },
        check(){
            this.allChecked = !this.allChecked
            bus.$emit('allChecked',this.allChecked)
        }
    },
    mounted(){
        this.goodsMsg = JSON.parse(localStorage.getItem('goodsMsg'));
        this.goodsMsg.map((v,i)=>{
            this.sum += parseFloat(v.pri)
        })
        let arr = [];
        let num=0
        bus.$on('sum',sum=>{
            this.sum = parseFloat((this.sum + parseFloat(sum)).toFixed(2))
        })
        
    },
    components:{
        cartCont,
        checkBox
    },
    // updated(){
    //     console.log(this.allChecked)
    // }
}
</script>
<style src="./cart.css">

</style>
