<template>
  <div>

    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pp-new-pizza></pp-new-pizza>
      </div>
      <div class="col-sm-12 col-md-6">
        <h3>Menu:</h3>
        <table class="table table-hover">
          <thead class="thead-default">
          <tr>
            <th>Item</th>
            <th>Remove from menu</th>
          </tr>
          </thead>
          <tbody v-for="item in getMenuItems" :key="item['.key']">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button class="btn btn-sm btn-outline-danger"
                      @click="removeMenuIem(item['.key'])">x</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h3>Current orders: {{numberOfOrders}}</h3>
        <table class="table table-sm" v-for="(orders,index) in getOrders" :key="orders['.key']">
          <thead class="thead-default">
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          <div class="order-number">
            <strong><em>Order Number: {{index + 1}}</em></strong>
            <button class="btn btn-sm btn-outline-danger"
                    @click="removeOrderItem(orders['.key'])">x</button>
          </div>
          <tr v-for="orderItem in orders['.value']">
            <td>{{orderItem.name}}</td>
            <td>{{orderItem.size}}</td>
            <td>{{orderItem.quantity}}</td>
            <td>{{orderItem.price}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <hr>
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <pp-login></pp-login>
      </div>
    </div>
  </div>
</template>

<script>
  import ppNewPizza from './NewPizza.vue'
  import ppLogin from './Login.vue'
  import {mapGetters} from 'vuex'
  import {dbMenuRef, dbOrdersRef} from '../firebaseConfig'

  export default {
    components: {
      ppNewPizza,
      ppLogin
    },
    computed: {
      // getMenuItems(){
      //   //return this.$store.state.menuItems
      //   return this.$store.getters.getMenuItems
      // },
      // numberOfOrders(){
      //   return this.$store.getters.numberOfOrders
      // }
      ...mapGetters([
        'getMenuItems',
        'numberOfOrders',
        'getOrders'
      ])
    },
    methods:{
      removeMenuIem(key){
        dbMenuRef.child(key).remove()
      },
      removeOrderItem(key){
        dbOrdersRef.child(key).remove()
      }
    },
    beforeRouteLeave: (to, from, next) => {
      if (confirm('Have you remember to log out') == true) {
        next()
      } else {
        next(false)
      }
    }
    // data() {
    //   return {
    //     name: 'Chris'
    //   }
    // },
    // beforeRouteEnter: (to, from, next) => {
    //   next(vm => {
    //     alert('Hi ' + vm.name)
    //   })
    // }
  }
</script>
