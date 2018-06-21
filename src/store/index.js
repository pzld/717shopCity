import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';
Vue.use(vuex);

export default new vuex.Store({
    state:{
        bannerList: [
          '../../static/img/banner/banner1.png',
          '../../static/img/banner/banner2.png',
          '../../static/img/banner/banner3.png',
          '../../static/img/banner/banner4.png',
          '../../static/img/banner/banner5.png'
        ],
        navList:[{
            icon: 'iconfont icon-mifan',
            cont: '家乡味道'
        }, {
          icon: 'iconfont icon-lunchuan',
          cont: '进口食品'
        }, {
          icon: 'iconfont icon-naiping',
          cont: '牛奶乳品'
        }, {
          icon: 'iconfont icon-unie642',
          cont: '茶果冲饮'
        }, {
          icon: 'iconfont icon-lingshi',
          cont: '健康零食'
        }, {
          icon: 'iconfont icon-you',
          cont: '米面粮油'
        }, {
          icon: 'iconfont icon-chufangdiaoliao',
          cont: '调微调料'
        }, {
          icon: 'iconfont icon-jiushuiyinliao',
          cont: '酒水饮料'
        }],
        navBanner:[
          '绿色无公害 无污染 无添加 天然有机蔬菜源头11111111111111',
          '绿色无公害 无污染 无添加 天然有机蔬菜源头22222222222222',
          '绿色无公害 无污染 无添加 天然有机蔬菜源头33333333333333'
        ],
        allChecked:false
    },
    mutations:{
       
    },
    actions:{
       allChecked({commit}){
          console.log(commit)
       }
    }
})