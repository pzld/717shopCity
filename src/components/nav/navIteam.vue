<template>
    <div class="nav">
        <span v-for="(v,i) in list" :key="i">
            <i :class="v.icon"></i>
            <span>{{v.cont}}</span>
        </span>
    </div>
</template>
<script>
export default {
    name:'navIteam',
    data(){
        return{
            list :[]
        }
    },
    mounted(){
        this.list = this.$store.state.navList;
    }
}
</script>
<style src="./nav.css" scoped>

</style>


