<template>
    <div id="app">
        <section>
            <router-view></router-view>
        </section>
        <footerDom/>
    </div>
</template>
<script>
import footerDom from '../components/footer/footerDom.vue'
export default {
    name:'home',
    components:{
        footerDom
    }
}
</script>
<style>
#app{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
#app>section{
    flex: 1;
    width: 100%;
    overflow-y: scroll;
}
</style>


