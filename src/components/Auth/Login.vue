<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <div class="background">
          <h1 class="form-group_text"><br>Iniciar sesion</h1><br>
          <form @submit.prevent="userLogin({email:login.email, password:login.pass})">
            <div class="form-group">
              <div class="text">
                <label class="text" for="username">Correo Electronico</label>
                <input class="sizebox form-control" type="text" placeholder="Ingresa tu correo" v-model="login.email">

                <label for="password">Contraseña</label>
                <input class="sizebox form-control" type="password" placeholder="Ingresa tu contraseña" v-model="login.pass">
                <br>
                <button type="submit" class="btn_ btn-black">Acceder</button>
                <p>{{login.email}}</p>
                <p>{{login.pass}}</p>
                <p>{{error}}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="background">
            <h1><br>Registro</h1><br>
            <form  @submit.prevent="createUser({email: email, password: pass1})">
              <div class="form-group">
                <div class="text">
                  <label for="username">Correo Electronico</label>
                  <input class="sizebox form-control" type="text" placeholder="Ingresa tu correo" v-model="email">

                  <label for="password">Contraseña</label>
                  <input class="sizebox form-control" type="password" placeholder="Ingresa tu contraseña" v-model="pass1">

                  <label for="password">Confirmar Contraseña</label>
                  <input class="sizebox form-control" type="password" placeholder="Ingresa tu contraseña" v-model="pass2">
                  <br>
                  <button type="submit" class="btn_ btn-black" :disabled='!disable'>Registrarse </button>
                </div>
              </div>
            </form>
          </div>
          </div>
      </div>
    </div>
    <p class="text-danger">{{error}}</p>
      <div class="row">
        <div class="col">
          <p class="text-success">{{email}}</p>
          <p class="text-success">{{pass1}}</p>
          <p class="text-success">{{pass2}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button class="btn_ btn-beige" @click="logout()">Cerrar sesion</button>
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
        ...mapState(['error']),
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
  text-align: center;
  margin-top: 30px;
  color: #d9a371;
}
.text-aqua p {
  color: var(--aqua) !important;
}
.sizebox{
  width: 450px;
}

.form-group label {
    margin-right: auto!important;
}
input, textarea {
    padding: 10px 10px!important;
    margin: 2px 0;
    font-size: .9em;
}

.background{
  width: 600px;
  height: 450px;
  margin-bottom: 100px;
}
.form-group{
  margin-left: 70px;
}
.text{
  margin-right: 70px;
}
</style>