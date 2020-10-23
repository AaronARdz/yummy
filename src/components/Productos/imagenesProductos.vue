<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-4 col-md-4" v-for="pastel in pasteles" :key="pastel.id">
        <div class="pastel">
          <img width="300" height="200" :src="require(`@/assets/img/pasteles/${pastel.img}`)" class="img-recipe" alt="Productos"> <br>
          <p class="desc">{{ pastel.name }}, {{ pastel.precio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "imagenesProductos",
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['pasteles']),
  },
  created() {
    console.log(this.pasteles)
  },
};
</script>

<style scoped>
h4 {
  color: black;
}
.pastel {
  background-color: #d9a371;
}
.desc {
  background-color: antiquewhite;
}
</style>