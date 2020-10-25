<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-4 col-md-4 mobile-margin-top" v-for="pastel in pasteles" :key="pastel.id" >
          <div class="producto-pastel" >
            <div class="text-center">
                <img :src="require(`@/assets/img/pasteles/${pastel.img}`)"  alt="" class="img__services mx-auto">
                <h3 class="align-middle m-4">{{ pastel.name }}</h3>
            </div>
            <p class="text-left text-muted ">
              precio: {{ pastel.price }}
            </p>
            <p class="text-left text-muted ">
              personas: 12
            </p>
            <div >
              <button class="btn_ btn-black mt-2 mb-4 ml-auto"
              @click="addPastel(pastel)"
              >Agregar al carrito
                <img class="ml-2 cart" src="@/assets/img/shopcart.png" alt=""> </button>
            </div>         
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: "imagenesProductos",
  data() {
    return {
      pastel: Object
    };
  },
  methods: {
    ...mapActions(['addPastel'])
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
  padding: 14px;
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