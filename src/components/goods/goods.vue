<template>
    <div class="goodsMain">
        <dl v-for="(v,i) in list" :key="i" class="goods">
            <dt><img v-lazy="v.imageurl" alt="" @click="goDetail(v.imageurl,v.wname,v.jdPrice)"></dt>
            <dd>
                <h4>{{v.wname}}</h4>
                <p class="goodsBbottom">
                    <b>￥{{v.jdPrice}}</b>
                    <i class="iconfont icon-gouwuche" @click="addCart"></i>
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
        addCart(){
            console.log(2)
        }
    }
}
</script>
<style>

</style>

