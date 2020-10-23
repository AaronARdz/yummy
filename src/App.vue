<template>
  <div id="app">
      <app-nav></app-nav>
     <router-view></router-view>
  </div>
</template>

<script>
import Nav from "@/components/Header/Nav.vue";

  export default {
    components: {
      appNav: Nav,
    }
  }
</script>

<style>
#app {
  font-family: 'Fjalla One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
