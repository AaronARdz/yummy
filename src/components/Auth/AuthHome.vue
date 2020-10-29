<template>
    <div class="container">
        <h1>Ruta protegida</h1>
        <p>{{user.email}}</p>
        <div class="row">
          <div class="col">
            <button class="btn_ btn-blue" @click="getPastel(parametro)">
              getPastel
            </button>
            <p>{{pastel}}</p>
          </div>
        </div>
        <div class="row">
            <div class="col">
              <button class="btn_ btn-delete" @click="logout()" v-if="user">Cerrar sesion</button>
            </div>
        </div>
          <form @submit.prevent="finder(text)" class="d-inline">
            <input type="text" placeholder="Buscar..."
            class="form-control mt-4 mb-4 d-inline"
            v-model="text" v-on:keyup="finder(text); currentPage = 1">
            <button class="btn_ btn-black d-inline">Buscar</button>
        </form>

        <div class="row">
          <div class="col">
            <div v-for="pastel in carritoArray" :key="pastel.id">
              <p>{{pastel.name}}</p>
              <p>{{pastel.quantity}}</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { mapState,mapActions, mapGetters } from 'vuex'

export default {
    name: 'AuthHome',
    data() {
      return {
        text: '',
        parametro: "4iDSLngJ7sZwA2bKQWhi",
        pastelon: {
        id: 1,
        name: "Pastel Aleman",
        price: "$250.00",
        quantity: 1,
        category: '',
        img: "pastelaleman.png"
      },

      }
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