<template>
  <div class="contacto">
    <appFormulario></appFormulario>
  </div>
</template>

<script>
import Formulario from "@/components/Contacto/Formulario.vue";

export default {
  name: "Contacto",
  components:{
    appFormulario: Formulario,
  }
}
</script>

<style scoped>
.contacto{
  
}
</style>