import Vue from 'vue'
import Vuex from 'vuex'

import menu  from './modules/menu'
import orders  from './modules/orders'
import users  from './modules/users'
import {firebaseMutations} from 'vuexfire'

// import * as getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  mutations:{
    ...firebaseMutations
  },
  modules:{
    menu,
    orders,
    users
  }

  // state:{
    // menuItems:{
    //   1: {
    //     'name': 'Margherita',
    //     'description': 'A delicious tomato based pizza topped with mozzarella',
    //     'options': [{
    //       'size': 9,
    //       'price': 6.95
    //     }, {
    //       'size': 12,
    //       'price': 10.95
    //     }]
    //   },
    //   2: {
    //     'name': 'Pepperoni',
    //     'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
    //     'options': [{
    //       'size': 9,
    //       'price': 7.95
    //     }, {
    //       'size': 12,
    //       'price': 12.95
    //     }]
    //   },
    //   3: {
    //     'name': 'Ham and Pineapple',
    //     'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
    //     'options': [{
    //       'size': 9,
    //       'price': 7.95
    //     }, {
    //       'size': 12,
    //       'price': 12.95
    //     }]
    //   }
    // },
    // orders:[],
    // currentUser: null
  // },

  // getters,
  // mutations,
  // actions

  // getters:{
  //   getMenuItems: state => state.menuItems,
  //   numberOfOrders: state => state.orders.length,
  //   currentUser: state => state.currentUser
  // },
  // mutations:{
  //   addOrder: (state,orders) => state.orders.push(orders),
  //   userStatus: (state,user) => {
  //     if (user){
  //       state.currentUser=user.email
  //     }else{
  //       state.currentUser=null
  //     }
  //   }
  // },
  // actions:{
  //   setUser: ({commit}, user) => {
  //     commit('userStatus', user)
  //   }
  // }

})
