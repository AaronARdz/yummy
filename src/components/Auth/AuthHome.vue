<template>
  <div class="container">
    <br>
    <div class="usuario">
      <h1>Ruta protegida</h1>
      <p>Inicio sesion: {{ user.email }}</p>
      <div class="row">
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col">
          <p>¿No es tu cuenta?</p>
          <button class="btn_ btn-delete" @click="logout()" v-if="user">
            Cerrar sesion
          </button>
        </div>
    </div>
    </div>
    <app-carrito></app-carrito>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Carrito from "@/components/Carrito/Carrito";

export default {
  name: "AuthHome",
  components: {
    appCarrito: Carrito
  },

  computed: {
    ...mapState(["user", "carrito", "shoppingCart", "pastel"]),
    ...mapGetters(["carritoArray"])
  },
  methods: {
    ...mapActions([
      "logout",
      "getCarrito",
      "finder",
      "getPasteles",
      "getPastel"
    ])
  },
  created() {
    this.getPasteles();
  }
};
</script>

<style>
h1{
  border-bottom: #2c3e50 5px;

}
</style>
