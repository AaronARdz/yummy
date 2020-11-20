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
          <input type="text" class="form-control" required placeholder="Pasteles que va a comprar">
        </div>
        <div class="form-group col-md-6">
          <label>Pago:<p>{{totalItem}}</p> </label>
        </div>
        <div class="container border rounded">
          <div class="form-row">
            <div class="form-group col ">
              <label>Nombre de tarjeta:</label>
              <input type="text" class="form-control" required placeholder="Nombre de tarjeta">
            </div>
            <div class="form-group col ">
              <label>Numero de tarjeta:</label>
              <input type="text" class="form-control" required placeholder="Numero de tarjeta">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col ">
              <label>Fecha de Expiracion:</label>
              <input type="date" class="form-control" required placeholder="Nombre de tarjeta">
            </div>
            <div class="form-group col ">
              <label>Numero de Seguridad:</label>
              <input type="text" class="form-control" required placeholder="Numero de tarjeta">
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
          <router-link to="/dpago">
            <button type="button" class="b3">
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
      "deletePastel"
    ]),

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