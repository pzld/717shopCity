<template>
    <div class="classify">
        <div class="classifyHeader">
            <p class="classifyIpt"><i class="iconfont icon-fangdajing"></i><input type="text" placeholder="输入您要购买的商品"></p>
            <i class="iconfont icon-xiaoxi"></i>
        </div>
        <div class="classifySection">
            <div class="classifyMain">
                <ul class="classifyNav">
                    <li :class="navIdx==1?'classifyNavActive':''" @click="navClick(1)">钟表首饰</li>
                    <li :class="navIdx==2?'classifyNavActive':''" @click="navClick(2)">住宅家具</li>
                    <li :class="navIdx==3?'classifyNavActive':''" @click="navClick(3)">家装建材</li>
                    <li :class="navIdx==4?'classifyNavActive':''" @click="navClick(4)">家居日用</li>
                    <li :class="navIdx==5?'classifyNavActive':''" @click="navClick(5)">床品家纺</li>
                    <li :class="navIdx==6?'classifyNavActive':''" @click="navClick(6)">汽车用品</li>
                    <li :class="navIdx==7?'classifyNavActive':''" @click="navClick(7)">黄金收藏</li>
                    <li :class="navIdx==9?'classifyNavActive':''" @click="navClick(9)">智能设备</li>
                </ul>
                <div class="classifyGoods">
                    <div class="classifyGoodsPart" v-for="v in classifyCont" :key="v.goodsTypeId">
                        <h3>{{v.goodsTypeName}}</h3>
                        <div class="classifyGoodsList">
                            <dl v-for="(item,idx) in v.goodsTypeList" :key="idx">
                                <dt>
                                    <img v-lazy="item.goodsTypeImgUrl" alt="">
                                </dt>
                                <dd>
                                    {{item.goodsTypeName}}
                                </dd>
                            </dl>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import './classify.css'
export default {
    data(){
        return{
            navIdx:1,
            classifyCont:[]
        }
    },
    methods:{
        navClick(idx){
            this.navIdx = idx;
            this.$http.get(`http://localhost:3000/api/classify?cid=1795184${idx}`).then(res=>{
                this.classifyCont = res.data.secondLevelCategories
            })
        }
    },
    mounted(){
        this.$http.get('http://localhost:3000/api/classify?cid=17951841').then(res=>{
           this.classifyCont = res.data.secondLevelCategories
        })
    }
}
</script>
<style>

</style>


