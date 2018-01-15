<template>
  <div>
    <pp-admin-hidden v-if="currentUser"></pp-admin-hidden>
    <hr>
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <pp-login></pp-login>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import ppLogin from './Login.vue'
  //import ppAdminHidden from './AdminHidden.vue'
  //dynamic import
  const ppAdminHidden = () => import('./AdminHidden.vue')

  export default {
    components: {
      ppLogin,
      ppAdminHidden
    },
    computed: {
      ...mapGetters([
        'currentUser'
      ])
    }
  }
</script>

<style>
  .order-number {
    margin: 10px 0;
  }
</style>
