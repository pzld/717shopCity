import Vue from 'vue';
import Router from 'vue-router';
import classify from '../pages/classify/classify.vue';
import social from '../pages/social/social.vue';
import cart from '../pages/cart/cart.vue';
import mine from '../pages/mine/mine.vue';
import search from '../pages/search/search.vue';
import home from '../pages/home.vue';
import detail from '../pages/detail/detail.vue';
import register from '../pages/login/register/register.vue';
import signin from '../pages/login/signin/signin.vue';
import index from '../pages/index/index.vue'
Vue.use(Router);

let router = new Router({
    mode:'history',
    routes:[{
        path:'/',
        name:'home',
        component:home,
        redirect:'/home'
    },{
        path:'/home',
        name:'home',
        component:home,
        redirect: '/home/index',
        children: [{
          path:'index',
          name:'index',
          component:index
        },{
          path: 'classify',
          name: 'classify',
          component: classify
        }, {
          path: 'social',
          name: 'social',
          component: social
        }, {
          path: 'cart',
          name: 'cart',
          component: cart
        }, {
          path: 'mine',
          name: 'mine',
          component: mine
        }]
    },{
      path:'/search',
      name:'search',
      component:search
    },{
      path:'/detail',
      name:'detail',
      component:detail
    }, {
      path: '/register',
      name: 'register',
      component: register
    }, {
      path: '/signin',
      name: 'signin',
      component: signin
    }]
})

router.beforeEach((to,from,next)=>{
  if(sessionStorage.getItem('code')){
      next()
  }else{
    if (to.path === '/home/index' || to.path === '/home/classify' || to.path === '/search' || to.path === '/register' || to.path === '/signin' || to.path === '/detail') {
      next()
    } else {
      next('/signin');
    }
  }
  
})

export default router;