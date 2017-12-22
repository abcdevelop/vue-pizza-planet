<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>
    <div class="container">
      <pp-menu></pp-menu>
    </div>
    <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
  import ppHeader from './components/Header.vue';
  import ppHome from './components/Home.vue';
  import ppFooter from './components/Footer.vue';
  import ppMenu from './components/Menu.vue';

  export default {
    components:{
      ppHeader,
      ppHome,
      ppFooter,
      ppMenu
    }
  }
</script>

<style>

</style>
