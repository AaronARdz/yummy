<template>
  <div class="container mt-4">
    <div class="buscar">
      <p>BUSCA TU FAVORITO</p>
      <div class="busqueda">
        <textarea rows="1" cols="130"></textarea>
      </div>
      <div class="Images">
        <app-images></app-images>
      </div>
    </div>
  </div>
</template>

<script>
import imagenesProductos from "@/components/Productos/imagenesProductos.vue";


export default {
    name: "Productos",
    components:{
        appImages: imagenesProductos
    }
};
</script>

<style scoped>
h1 {
  color: #d9a371;
}
.text-aqua p {
  color: var(--aqua) !important;
}
p {
  text-align: left;
  margin-left: 45px;
  color: #d9a371;
}
.busqueda {
  border-color: #d9a371;
  color: #d9a371;
  text-align: left;
  margin-left: 45px;
  margin-bottom: 30px;
}
</style>