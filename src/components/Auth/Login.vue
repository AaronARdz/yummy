<template>
  <div class="container">
    <br><br>
      <div class="row">
        <div class="col-sm-6">
          <form @submit.prevent="userLogin({email:login.email, password:login.pass})">
            <div class="container">
              <h1>Iniciar sesion</h1><br>
              <label for="username">Correo Electronico</label>
              <input class="input-group input-group-sm mb-3" type="text" placeholder="Ingresa tu correo" v-model="login.email">
              <label for="password">pass</label>
              <input class="input-group input-group-sm mb-3" type="password" placeholder="Ingresa tu contraseña" v-model="login.pass">
              <button type="submit" class="btn_ btn-black">Acceder</button>
            </div>
          </form>
        </div>
        <div class="col-sm-6">
          <form  @submit.prevent="createUser({email: email, password: pass1})">
            <div class="container">
              <h1>Registrarse</h1><br>
              <label for="username">Correo Electronico</label>
              <input class="input-group input-group-sm mb-3" type="text" placeholder="Ingresa tu correo" v-model="email">
              <label for="password">pass</label>
              <input class="input-group input-group-sm mb-3" type="password" placeholder="Ingresa tu contraseña" v-model="pass1">
              <label for="password">confirm pass</label>
              <input class="input-group input-group-sm mb-3" type="password" placeholder="Ingresa tu contraseña" v-model="pass2">
              <button type="submit" class="btn_ btn-black" :disabled='!disable'>Registrarse </button>
              <br><br><br><br>
            </div>
          </form>
        </div>
      </div>
    <p class="text-danger">{{error}}</p>
      <div class="row">
        <div class="col">
          <button class="btn_ btn-delete mb-2" @click="logout()" v-if="user">Cerrar sesion</button>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

  export default {
      name: "Login",
      data() {
        return {
          email: '',
          pass1: '',
          pass2: '',
          login: {
            user: '',
            pass: '',
          }
        }
      },
      created() {
        console.log("created component")
      },
      methods: {
        ...mapActions(['createUser','userLogin','logout'])
      },
      computed: {
        ...mapState(['error', 'user']),

        disable() {
          return this.pass1 === this.pass2 && this.pass1.trim() !== '';
        }
      }
  };

</script>

<style scoped>
p{
  color: whitesmoke;
}

h1 {
  margin-top: 20px;
  color: #d9a371;
}
.text-aqua p {
  color: var(--aqua) !important;
}

@media screen and (max-width: 500px){

}
</style>