<template>
  <div class="home">
    <app-header></app-header>
    <app-mision></app-mision>
    <div class="fundacion">
      <appfundacion></appfundacion>
    </div>
    <div class="diferencia">
      <appdiferencia></appdiferencia>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header/Header1.vue";
import Mision from "@/components/Body/mision";
import Footer from "@/components/Body/Footer.vue";
import fundacion from "@/components/Body/fundacion";
import diferencia from "@/components/Body/diferencia";


export default {
  name: "Nosotros",
  components: {
    appHeader : Header,
    appMision : Mision,
    appFooter : Footer,
    appfundacion: fundacion,
    appdiferencia: diferencia,
  }
};
</script>

<style scoped>
.home {
  background-image: url('../assets/img/bg.png');
  background-color:rgba(0, 0, 0, 0.2);
  background-size: cover;
  max-width: 100%;
  height: 400px;
}
.fundacion{
  background-color: #D9A371;
}
.diferencia{
  background-image: url("../assets/img/backgrounddif.png");
}
</style>
