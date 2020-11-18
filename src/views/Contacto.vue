<template>
  <div class="contacto">
    <div class="header">
      <app-header></app-header>
    </div>
    <appFormulario></appFormulario>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Formulario from "@/components/Contacto/Formulario.vue";
import Footer from "@/components/Body/Footer.vue"
import Header from "@/components/Header/HeaderContacto";

export default {
  name: "Contacto",
  components: {
    appFormulario: Formulario,
    appFooter: Footer,
    appHeader: Header,
  }
}
</script>

<style scoped>
.header{
  padding: 50px;
  background-image: url('../assets/img/bg-pastel.png');
}
.contacto{
  background-color: whitesmoke;
}
</style>
