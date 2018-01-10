<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>
    <div class="container">
      <pp-admin></pp-admin>
    </div>
    <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
  import ppHeader from './components/Header.vue'
  import ppFooter from './components/Footer.vue'
  import ppHome from './components/Home.vue'
  import ppMenu from './components/Menu.vue'
  import ppAdmin from './components/Admin.vue'

  export default {
    components:{
      ppHeader,
      ppFooter,
      ppHome,
      ppMenu,
      ppAdmin
    }
  }
</script>

<style>

</style>
