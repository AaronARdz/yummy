<template>
    <div class="container">
      <h1>Temporalmente fuera de servicio.</h1>
      <app-carrito></app-carrito>
    </div>
</template>

<script>
import Carrito from '@/components/Carrito/Carrito.vue'

export default {
  components: {
    appCarrito: Carrito
  },
  name: "Carrito"

}

</script>

<style scoped>
  .Temporalmente{
    font-size: 100px;
    color: white;
  }
</style>
