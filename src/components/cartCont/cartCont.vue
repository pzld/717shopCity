<template>
    <div class="cartCont">
        <span class="minus" @click="minus">-</span>
        <span>{{cont}}</span>
        <span class="add" @click="add">+</span>
    </div>
</template>
<script>
import bus from '../../utils/bus.js'
export default {
    name:'cartCont',
    props:['idx'],
    data(){
        return{
            cont:1,
            goodsMsg:[],
            sum:0
        }
    },
    methods:{
        minus(){
            if(this.cont==1){
                this.cont =1;
                bus.$emit('sum',0)
            }else{
                this.cont--
                this.sum = this.goodsMsg[this.idx].pri
                bus.$emit('sum',-this.sum)
            }
            
        },
        add(){
            this.cont++;
            this.sum = this.goodsMsg[this.idx].pri
            bus.$emit('sum',this.sum)
            bus.$on('checkbox',checkbox=>{
                console.log(checkbox)
            })
        }
    },
    mounted(){
        this.goodsMsg = JSON.parse(localStorage.getItem('goodsMsg'));
        
    }
}
</script>
<style>
.cartCont{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.cartCont>span{
    width: .4rem;
    text-align: center;
    border: .01rem solid #ccc;
}
</style>


