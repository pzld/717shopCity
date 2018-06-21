<template>
    <i :class="checked?'iconfont icon-xuanzekuangxuanzhong':'iconfont icon-xuanzekuangmoren'" @click="change"></i>
</template>
<script>
import bus from '../../utils/bus.js'
export default {
    props:['idx','check'],
    data(){
        return{
            checked:false,
            allChecked:false
        }
    },
    methods:{
        change(){
            this.checked = !this.checked;
            bus.$emit('checkBox',{
                checked:this.checked,
                idx:this.idx
            })
        }
    },
    mounted(){
        bus.$on('allChecked',allChecked=>{
            this.allChecked = allChecked
            if(this.allChecked){
                this.checked = true
            }else{
                this.checked = false
            }
        })
        
    }
}
</script>
<style scoped>

</style>

