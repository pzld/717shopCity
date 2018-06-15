<template>
    <div class="banner swiper-container" ref="banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(v,i) in this.$store.state.bannerList" :key="i">
                <img :src="v" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
    name:'bannerIteam',
    mounted(){
        new Swiper('.banner',{
            loop:true,
            autoplay:{
                delay:2000
            }
        })
    }
}
</script>
<style scoped>
.banner{
    width: 100%;
    height: 3.55rem;
}
.banner>.swiper-wrapper>.swiper-slide>img{
    width: 100%;
    height: 100%;
}
</style>



