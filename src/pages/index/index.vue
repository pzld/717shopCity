<template>
    <div class="home">
        <header>
            <p class="icon"><img src="../../../static/img/icon.png" alt=""></p>
            <p class="search"><i class="iconfont icon-fangdajing"></i><input type="text" placeholder="请输入您要购买的商品" @click="goSearch"></p>
            <div class="myshop">
                <i class="iconfont icon-shop"></i>
                <span>我的店铺</span>
            </div>
            <div class="msg">
                <i class="iconfont icon-xiaoxi"></i>
                <span>消息</span>
            </div>
        </header>
        <div class="section" @scroll="onScroll" ref='sec'>
            <div ref = 'doc'>
                <bannerIteam/>
                <navIteam/>
                <div class="advert">
                    <div class="tit">
                        商城动态
                    </div>
                    <div class="navBanner swiper-container" ref="banner">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(v,i) in this.$store.state.navBanner" :key="i">
                                <div>{{v}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="middle">
                    <div class="left">
                        <b>天天特惠</b>
                        <span>每天都有惊喜</span>
                    </div>
                    <div class="right">
                        <span>更多</span>  <i class="iconfont icon-xiangyou"></i>
                    </div>
                </div>
                <goodsMain :list="mainList"/>
                <p class="lastMsg">{{msg}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import '../../../static/font/iconfont.css';
import bannerIteam from '../../components/banner/bannerIteam.vue';
import navIteam from '../../components/nav/navIteam.vue';
import Swiper from 'swiper';
import goodsMain from '../../components/goods/goods.vue'
export default {
    name:'index',
    data(){
        return{
            mainList:[],
            flag : true,
            page:1,
            msg:'正在玩命加载中...'
        }
    },
    components:{
        bannerIteam,
        navIteam,
        goodsMain
    },
    methods:{
        goSearch(){
            this.$router.push('/search')
        },
        onScroll(){
            let winH = this.$refs.sec.offsetHeight;
            let docH = this.$refs.doc.offsetHeight;
            let scrollH = this.$refs.sec.scrollTop;
            if(docH-scrollH-winH<20 && this.flag){
                this.page++;
                if(this.page<=5){
                    this.$http(`http://localhost:3000/index/recommend.action?page=${this.page}`).then(res=>{
                        this.mainList = [
                            ...this.mainList,
                            ...JSON.parse(JSON.parse(res.data).recommend).wareInfoList
                        ]
                        this.flag = true
                    })
                }else{
                    this.msg="我是有底线的"
                }
                this.flag = false
            }
        }
    },
    mounted(){
        new Swiper('.navBanner',{
            direction: 'vertical',
            slidesPerView: 1,
            mousewheel: true,
            aotuHeight:true,
            loop:true,
            autoplay:{
                delay:2000
            },
        }),
        this.$http('http://localhost:3000/index/recommend.action?page=1').then(res=>{
           this.mainList = JSON.parse(JSON.parse(res.data).recommend).wareInfoList
        })
    }
}
</script>
<style src="./index.css">

</style>


