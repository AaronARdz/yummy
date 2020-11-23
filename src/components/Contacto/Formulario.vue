<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mt-3">
        <a href="https://www.facebook.com/Yummy-Pasteleria-103286231592222" target="_blank"><img class="icon" src="../../assets/img/fb-white.png"/></a>
        <h4>Facebook <br> @pasteleriaYummy</h4>
        <a href="https://goo.gl/maps/RhLMaFzZF9vEixpz8" target="_blank"><img class="icon" src="../../assets/img/location-white.png"/></a>
        <h4>Dirección <br> 13, Gonzalitos, 64020 Monterrey, N.L.</h4>
        <img class="icon" src="../../assets/img/phone-white.png"/>
        <h4>Teléfono <br>(81) 2025 2050</h4>
        <a href="https://instagram.com/yummypasteleria.mty?igshid=stxx7947ld54" target="_blank">
          <img class="icon" src="../../assets/img/insta-white.png"/></a>
          <h4>Instagram <br>@yummy_pasteleria</h4>
      </div>
      <div class="col-12 col-md-6 col-lg-6 Contacto rounded ">
         <div class="text-center mx-auto mt-5 clearfix " v-if="loading">
            <p>Cargando...</p>
            <div class="text-center">
              <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div v-if="isSubmitted" class="form__control mx-auto">
          <h2 class="text-lighter text-center">Gracias, pronto nos pondremos en contacto.</h2>
        </div>
        <form v-if="!isSubmitted" >
         <div class="form-row mt-4">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Nombre:</label>
            <input type="text" class="form-control" required placeholder="Tu nombre"
            v-model="contact.name"
            >
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Apellido:</label>
            <input type="text" class="form-control" required placeholder="Tu apellido"
            v-model="contact.lastName"
            >
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Teléfono:</label>
            <input type="text" class="form-control"  required placeholder="11 - 22 - 33 -44"
            v-model="contact.phone"
            >
          </div>
          <div class="form-group col-md-6">
            <label for="inputZip">Correo:</label>
            <input type="text" class="form-control" required placeholder="correo@email.com"
            v-model="contact.email"
            >
          </div>
        </div>
        <div class="form-row">
            <div class="form-group col ">
              <label for="msg">Asunto:</label>
              <textarea class="form-control"  rows="4" style="outline: none;" required placeholder="Tu mensaje..."
              v-model="contact.message"
              ></textarea>
            </div>
        </div>
        <div class="text-center">
        <div class="form-group">
          <div class="">
              <button 
              type="submit"
              class="btn_ btn-orange ml-0"
              :disabled="loading"
              @click="addContact(contact)"
              >Enviar</button>
          </div>
        </div>
        </div>
      </form>
      </div>
      
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  data() {
    return {
      hover: false,
      contact: {
        name: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      }
    }
  },
  methods: {
    ...mapActions(['addContact']),
  },
  computed: {
    ...mapState(['loading','isSubmitted'])
  }
};
</script>

<style scoped>
p{
  color: whitesmoke;
}
h4{
  font-size: 18px;
  margin-top: 5px;
  margin-left: 60px;
  text-align: left;
  font-weight: lighter;
}
.icon{
  text-align: left;
  width: 50px;
  height: 50px;
  margin-right: 900px;
  margin-bottom: -80px;
}
.Contacto{
  width: 600px;
  height: 400px;
  background-image: url("../../assets/img/bg.png");
  margin-top: 50px;
  margin-bottom: 100px;
}
label{
  color:whitesmoke;
}
input, textarea {
      padding: 10px 10px!important;
      margin: 2px 0;
      font-size: 1em;
    }
    input::placeholder {
      color: var(--black-light);
      opacity: .5;
    }
    textarea::placeholder {
      color: var(--black-light);
      opacity: .5;
    }
    input[type=text]:focus {
      border: 3px solid var(--bg-yellow);
    }
    input[type=email]:focus {
      border: 3px solid var(--bg-yellow);
    }
    input[type=textarea]:focus {
      border: 3px solid var(--bg-yellow);
    }

    .button__orange {
      background-color: var(--orange);
    }
    .form__control {
      max-width: 100%;
      margin-right: 16px;
      margin-left: 16px;
    }
    @media (max-width: 768px) {
      .form__control {
        max-width: 100%;
        margin-right: 8px;
        margin-left: 8px;
      }
      .hidden__image {
        display: none;
      }

      .Contacto{
        height: 580px;
        background-image: url("../../assets/img/bg.png");
        margin-top: 50px;
        margin-bottom: 100px;
      }
    }


</style>
