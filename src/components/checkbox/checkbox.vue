<template>
    <i :class="checked?'iconfont icon-xuanzekuangxuanzhong':'iconfont icon-xuanzekuangmoren'" @click="checked=!checked"></i>
</template>
<script>
export default {
    data(){
        return{
            checked:false
        }
    }
}
</script>
<style scoped>

</style>

