<template>
  <div class="home">
    <app-header></app-header>
    <app-novedades></app-novedades>
    <div class="bg-pasteles">
        <app-carousel></app-carousel> 
    </div>
    <app-vendido></app-vendido>
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Body/Footer.vue";
import Header from "@/components/Header/Header.vue";
import Novedades from "@/components/Body/Novedades.vue"
import Carousel from "@/components/Body/Carousel.vue"
import masVendido from "@/components/Body/masVendido.vue"

export default {
  name: "Home",
  components: {
    appHeader : Header,
    appNovedades : Novedades,
    appCarousel: Carousel,
    appVendido : masVendido,
    appFooter : Footer,
  }
};
</script>

<style scoped>
  .home {
    background-image: url('../assets/img/cake.gif');
    background-color:rgba(0, 0, 0, 0.2);
    background-size: cover;
    max-width: 100%;
    height: 600px;
  }
  .bg-pasteles {
    background-image: url('../assets/img/bg-rodillo.png');
    background-repeat: no-repeat;
  }
</style>
