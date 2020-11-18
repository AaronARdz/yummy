<template>
    <div class="container">
        <h1>Ruta protegida</h1>
        <p>{{user.email}}</p>
        <div class="row">
          <div class="col">
          </div>
        </div>
        <div class="row">
            <div class="col">
              <button class="btn_ btn-delete" @click="logout()" v-if="user">Cerrar sesion</button>
            </div>
          <app-carrito></app-carrito>
        </div>
    </div>
</template>

<script>
import { mapState,mapActions, mapGetters } from 'vuex'
import Carrito from "@/components/Carrito/Carrito";

export default {
    name: 'AuthHome',
  components: {
      appCarrito:Carrito,
  },

  computed:{
        ...mapState(['user','carrito','shoppingCart', 'pastel']),
        ...mapGetters(['carritoArray'])
    },
     methods: {
        ...mapActions(['logout','getCarrito','finder','getPasteles', 'getPastel'])

    },
    created() {
      this.getPasteles()
    }
    }
</script>