<template>
    <div>
      <div class="container">
        <app-carrito></app-carrito>
      </div>
      <app-footer></app-footer>
    </div>
</template>

<script>
import Carrito from '@/components/Carrito/Carrito.vue'
import Footer from "@/components/Body/Footer.vue";
export default {

  components: {
    appCarrito: Carrito,
    appFooter: Footer,
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
