<template>
  <div class="home">
    <app-header></app-header>
    <app-productos></app-productos>
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header/HeaderProductos.vue";
import Footer from "@/components/Body/Footer.vue";
import Productos from "@/components/Productos/Productos.vue";

export default {
  name: "Nosotros",
  components: {
    appHeader: Header,
    appProductos: Productos,
    appFooter: Footer
  }
};
</script>

<style scoped>
.home {
  background-image: url("../assets/img/bg-pasteles.png");
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
  max-width: 100%;
  height: 400px;
}
</style>