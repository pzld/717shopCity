<template>
    <div class="searchPage">
        <header>
            <p class="searchPageIpt">
                <i class="iconfont icon-fangdajing"></i>
                <input type="text" placeholder="搜索您要找的商品" @keypress="searchPage" v-model="val">
            </p>
            <p class="cancelSearchPage" @click="searchNull">
                取消
            </p>
        </header>
        <div class="searchPageSection">
            <div class="nearest">
                <div class="nearTitle">
                    <p>最近在搜</p>
                    <i class="iconfont icon-shanchu" @click="del"></i>
                </div>
                <div class="nearCont">
                    <p>{{noSearchPage}}</p>
                    <span v-for="(v,i) in nearList" :key="i">{{ v }}</span>
                </div>
            </div>
            <div class="mostPeople">
                <div class="mTitle">
                    <p>大家都在搜</p>
                </div>
                <div class="mCont">
                    <span>蜂蜜</span><span class="mActive">三黄鸡</span><span>红酒</span><span>红枣</span>
                    <span>蜂蜜</span><span>三黄鸡</span><span class="mActive">红酒</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'searchPage',
    data(){
        return{
            val:'',
            nearList:[],
            noSearchPage:'无搜索历史'
        }
    },
    methods:{
        searchPage(e){
            if(e.code === 'Enter'||e.code==='NumpadEnter'){
                if(this.val){
                    this.nearList.push(this.val)
                    this.noSearchPage = '',
                    this.val = ''
                }
            }
        },
        del(){
            this.nearList = []
            this.noSearchPage = '无搜索历史'
        },
        searchNull(){
            this.val = ''
        }
    },
}
</script>
<style src="./searchPage.css">

</style>


