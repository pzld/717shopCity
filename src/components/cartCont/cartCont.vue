<template>
    <div class="cartCont">
        <span class="minus" @click="minus">-</span>
        <span>{{cont}}</span>
        <span class="add" @click="add">+</span>
    </div>
</template>
<script>
export default {
    name:'cartCont',
    data(){
        return{
            cont:1
        }
    },
    methods:{
        minus(){
            if(this.cont==1){
                this.cont =1
            }else{
                this.cont--
            }
            
        },
        add(){
            this.cont++
        }
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


