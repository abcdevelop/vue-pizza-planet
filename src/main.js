import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './store/store.js'
import Accounting from 'accounting-js'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return {x: 0, y: 0}
    // }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

// router.beforeEach((to,from,next)=>{
//   if(to.path != '/admin'){
//     next()
//   }else{
//     next(false)
//   }
// })

// router.afterEach((to,from,next)=>{
//   alert('after each')
// })

Vue.filter('currency', function (val) {
  return Accounting.formatMoney(val)
})

// Vue.component('global-component',
//      {template:'<div>A global component </div>'}
// )

// Vue.component('global-component',
//   function(resolve,reject){
//     setTimeout(function(){
//       resolve({template:'<div>A global component </div>'})
//     },2000)
//   }
// )

// Vue.component('global-component',
//   () => import('./components/Menu.vue')
// )


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
