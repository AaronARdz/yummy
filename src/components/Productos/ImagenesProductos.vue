<template>
      <div class="col-12 col-md-4 col-lg-4 mobile-margin-top" >
          <div class="producto-pastel mt-4" >
            <div class="text-center">
                <img :src="require(`@/assets/img/pasteles/${cake.img}`)"  alt="" class="img__services mx-auto">
                <h3 class="align-middle m-4">{{ cake.name }}</h3>
            </div>
            <p class="text-left text-muted ">
              precio: {{ cake.price }}
            </p>
            <p class="text-left text-muted ">
              personas: 12
            </p>
                <label for="quantity">Quantity</label>
                <input :placeholder="cake.quantity" v-model="cantidad" >
                <div>
                <button class="btn_ btn-blue mt-2 mb-4 ml-auto"
                @click="addCantidad(cake)"
                >Agregar al carrito
                <img class="ml-2 cart" src="@/assets/img/shopcart.png" alt=""> </button>
                  <a :href="cake.lin">
                    <button class="btn_ btn-blue mt-2 mb-4 ml-auto"
                    >Realidad Aumentada
                      <img class="ml-2 cart" src="@/assets/img/AR.png" width="40" height="40"> </button>
                  </a>
            </div>        
          </div>
        </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  props: {
    cake : {
      id: '',
      name: '',
      quantity: 1,
      category: '',
      price: '',
      img: '',
      lin: '',
    },
  },
  name: "imagenesProductos",
  data() {
    return {
      cantidad : 1
    };
  },
  methods: {
    ...mapActions(['addPastel']),
      addCantidad(pastel) {
      this.pastel = pastel,
      this.pastel.quantity = this.cantidad,
      this.lin = this.link,
      this.addPastel(pastel)
        alert("Se agrego el producto al carrito");
    }
  },
  computed: {
    ...mapState(['pasteles','loading']),

  },
  created() {
    console.log(this.pasteles)
  },
};
</script>

<style scoped>
.img__services {
    max-width: 250px;
}

@media (max-width: 576px) {
    .img__services {
    max-width: 200px;
}
}
button {
  padding: 10px;
}
h4 {
  color: black;
}
.pastel {
  max-width: 320px;
  height: 220px;
  background-color: #d9a371;
  margin: 2rem;
}
.pastel img {
  max-width: 300px;
  max-height: 200px;
}
.desc {
  background-color: silver;
}
.cart img {
  fill: white!important;
}
</style>