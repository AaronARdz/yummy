<template>
  <div>
    <div class="background">
      <app-header></app-header>
    </div>
    <div class="container">
      <br>
      <h2>
        Confirmar Datos de Pago
      </h2>
      <div class="form-row mt-4">
        <div class="form-group col-md-6">
          <label>Concepto:</label>
          <input type="text" class="form-control" required placeholder="Pasteles que va a comprar" v-model="order.concept">
        </div>
        <div class="form-group col-md-6">
          <label>Pago:<p>{{totalItem}}</p> </label>
        </div>
        <div class="container border rounded">
          <div class="form-row">
            <div class="form-group col ">
              <label>Nombre de tarjeta:</label>
              <input type="text" class="form-control" required placeholder="Nombre de tarjeta" v-model="order.name">
            </div>
            <div class="form-group col ">
              <label>Numero de tarjeta:</label>
              <input type="text" class="form-control" required placeholder="Numero de tarjeta" v-model="order.number" @keypress="isNumber">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col ">
              <label>Fecha de Expiracion:</label>
              <input type="date" class="form-control" required placeholder="Fecha de expiracion" v-model="order.date">
            </div>
            <div class="form-group col ">
              <label>Numero de Seguridad:</label>
              <input type="text" class="form-control" required placeholder="CVV" v-model="order.cvv" @keypress="isNumber">
            </div>
            <div class="form-group col ">
              <label>Tarjeta de:</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Crédito</option>
                <option>Débito</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <br>
      <div class="container">
        <div class="row">
          <div class="col">
            <router-link to="/dfact"
            ><button type="button" class="b2">
              Atras
            </button></router-link>
          </div><div class="col">
          <router-link to="/">
            <button type="button" class="b3" @click="alert" @mouseup="addOrder(order)" v-if="order.number && order.concept && order.name && order.date && order.cvv">
              Siguiente
            </button></router-link>
        </div>
        </div>
      </div>
    </div>
    <br>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HeaderPago from "@/components/Header/HeaderPago";
import Footer from "@/components/Body/Footer";
import Carrito from "@/components/Carrito/Carrito";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "datos",
  components: {
    appHeader: HeaderPago,
    appFooter: Footer,
  },
  data() {
    return {
      Carrito: Carrito,
      hover: false,
      order: {
        concept: '',
        name: '',
        number: '',
        cvv: '',
        date: '',
      }
    }
  },
  computed: {
    ...mapState(["user", "carrito", "shoppingCart", "pastel"]),
    ...mapGetters(["carritoArray"]),

    totalItem() {
      let sum = 0;
      for (let i = 0; i < this.carritoArray.length; i++) {
        sum += parseFloat(this.carritoArray[i].price.replace("$", ""));
      }
      return sum;
    },

    isMobile() {
      return this.windowWidth <= 768;
    },
  },
  methods: {
    ...mapActions([
      "logout",
      "getCarrito",
      "finder",
      "getPasteles",
      "getPastel",
      "deletePastel",
      "addOrder"
    ]),

    isNumber: function (evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
        ;
      } else {
        return true;
      }
    },
    alert(){
      alert("Gracias por comprar con nosotros, tu orden fue agregada")
    },

    created() {
      this.getPasteles();
      this.windowWidth = window.innerWidth;
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    },
  }
}
</script>

<style scoped>
p{
  color: black;
}
.background{
  background-image: url("../../assets/img/bg-pastel.png");
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
  max-width: 100%;
  height: 250px;
}
label{
  color: #d9a371;
}
h2{
  color: #d9a371;
}

.b2 {
  height: 44px;
  width: 200px;
  left: 808.744140625px;
  top: 1197px;
  border-radius: 30.5px;
  background: #d9a371;
  margin-bottom: 50px;
}

.b3 {
  height: 44px;
  width: 200px;
  left: 808px;
  top: 1197px;
  border-radius: 30.5px;
  background: #79d3ca;
  margin-bottom: 50px;
}

@media screen and (max-width: 500px) {
  .b2 {
    height: 44px;
    width: 100px;
    left: 400px;
    top: 1197px;
    border-radius: 30.5px;
    background: #d9a371;
    margin-bottom: 50px;
  }

  .b3 {
    height: 44px;
    width: 100px;
    left: 400px;
    top: 1197px;
    border-radius: 30.5px;
    background: #79d3ca;
    margin-bottom: 40px;
  }
}
</style>