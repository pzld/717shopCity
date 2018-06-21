<template>
    <div class="goodsMain">
        <dl v-for="(v,i) in list" :key="i" class="goods">
            <dt><img v-lazy="v.imageurl" alt="" @click="goDetail(v.imageurl,v.wname,v.jdPrice)"></dt>
            <dd>
                <h4>{{v.wname}}</h4>
                <p class="goodsBbottom">
                    <b>￥{{v.jdPrice}}</b>
                    <i class="iconfont icon-gouwuche" @click="addCart(v.imageurl,v.wname,v.jdPrice)"></i>
                </p>
            </dd>
        </dl>
    </div>
</template>
<script>
import './goods.css'
export default {
    name:'goodsMain',
    props:['list'],
    data(){
        return{
            goodsArr:[]
        }
    },
    methods:{
        goDetail(img,name,pri){
            this.$router.push({
                path:'/detail',
                query:{
                    img,
                    name:encodeURI(name),
                    pri
                }
            })
        },
        addCart(img,name,pri){
            if(sessionStorage.getItem('code')){
                let goodsMsg = {
                    img,
                    name,
                    pri
                }
                this.goodsArr.push(goodsMsg)
                let str = JSON.stringify(this.goodsArr)
                localStorage.setItem('goodsMsg',str)
            }else{
                alert('请先登录')
                this.$router.push('/login')
            }
        }
    }
}
</script>
<style>

</style>

