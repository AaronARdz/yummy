<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Header/Nav";

export default {
  components: {
    appNav: Nav,

  }
}
</script>


<style scoped>
#app {
  margin-top: 0px;
  font-family: 'Fjalla One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #232b2b;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
