<template>
  <div class="container mt-4">      
        <div class="row mt-2">
            <app-images :cake="pastel" v-for="pastel in pasteles" :key="pastel.id"></app-images>
        </div>
  </div>
</template>

<script>
import ImagenesProductos from "@/components/Productos/ImagenesProductos.vue";
import {mapState} from 'vuex'

export default {
    name: "Productos",
    components:{
        appImages: ImagenesProductos
    },
      computed: {
    ...mapState(['pasteles','loading']),

  },
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