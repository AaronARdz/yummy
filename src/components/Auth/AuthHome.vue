<template>
    <div>
        <h1>Ruta protegida</h1>
        <p>{{user.email}}</p>
         <div class="row">
        <div class="col">
          <button class="btn_ btn-beige" @click="logout()">Cerrar sesion</button>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

export default {
    name: 'AuthHome',
    computed:{
        ...mapState(['user'])
    },
     methods: {
        ...mapActions(['logout'])
      },
}
</script>