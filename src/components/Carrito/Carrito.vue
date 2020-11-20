<template>
  <div class="carritolleno">
    <div>
      <br />
      <br />
      <h1>TU CARRITO</h1>
    </div>
    <hr />
    <div class="Cback">
      <br />
      <div class="container mt-4">
        <div class="row">
          <div class="col">
            <h2 v-if="!isMobile">Productos</h2>
            <p v-if="isMobile" class="text-muted">Productos</p>
          </div>
          <div class="col">
            <h2 v-if="!isMobile">Cantidad</h2>
            <p v-if="isMobile" class="text-muted">Cantidad</p>
          </div>
          <div class="col">
            <h2 v-if="!isMobile">Precio</h2>
            <p v-if="isMobile" class="text-muted">Precio</p>
          </div>
          <div class="col">

          </div>
        </div>
        <div class="row mt-2" v-for="pastel in carritoArray" :key="pastel.id">
          <div class="col">
            <div>
              <p  class="d-inline">{{ pastel.name }}</p>
              <hr class="my-4">
            </div>
          </div>
          <div class="col">
            <div>
              <p>{{ pastel.quantity }}</p>
              <hr class="my-4">
            </div>
          </div>
          <div class="col">
            <div >
              <p>${{ pastel.price.replace("$","") * pastel.quantity }}</p>
              <hr class="my-4">
            </div>
          </div>
          <div class="col">
             <router-link to="/auth">
              <button  class="d-inline btn_ btn-delete ml-2" @click="deleteCake(pastel)">x</button>
              </router-link>
          </div>
        </div>
      </div>
    </div>
    <br />

    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="col">
            <h3>FECHA</h3>
            <input type="date" />
          </div>
        </div>
        <div class="col-md-3">
          <table class="col-md-5">
            <tr>
              <th class="col1t">CANTIDAD</th>
              <th>
                <p>{{ totalQty }}</p>
              </th>
            </tr>
            <tr>
              <th class="col1t">TOTAL</th>
              <th>${{ totalItem }}</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <br />
    <div>
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-2">
            <h1>IMPORTANTE</h1>
          </div>
          <div class="col-md-10">
            <ul>
              <li>
                Sin excepcion alguna no se haran rembolsos, cancelaciones ni
                cambios fisicos
              </li>
              <li>
                La entrega se realizara solamente a la persona que se
                especifique al llenar los datos
              </li>
              <li>
                Debera mostrar el comprobante de compra junto con la
                identificacion oficial
              </li>
              <li>
                Este es un sistema de venta que NO comtempla la entrega a
                domicilio. El producto se paga en esta pagina y se recoge en la
                tienda
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div>
      <div class="container mt-4">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-4">
            <router-link to="/"
              ><button type="button" class="b2">CANCELAR</button></router-link
            >
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <router-link to="/Productos"
              ><button type="button" class="b2">
                SEGUIR COMPRANDO
              </button></router-link
            >
          </div>
          <div class="col-12 col-md-4 col-lg-4"><button type="button" class="b3">PAGAR</button></div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "CarritoLleno",
  components: {},
  data() {
    return {
      windowWidth: ''
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

    totalQty() {
      let sum = 0;
      for (let i = 0; i < this.carritoArray.length; i++) {
        sum += parseFloat(this.carritoArray[i].quantity);
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
    deleteCake(pastel) {
        this.carritoArray.splice(this.carritoArray.indexOf(pastel), 1);
        this.deletePastel(pastel.id)
        //remove one element starting from the element 'fruit'
      },
  },
  created() {
      this.getPasteles();
      this.windowWidth = window.innerWidth;
      window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
};
</script>
<style scoped>
h1 {
  color: #d9a371;
}
hr {
  color: #d9a371;
}
input {
  text-align: center;
}
.Cback {
  background-color: rgba(239, 232, 232, 0.39);
}
.col1t {
  color: #d9a371;
}
li {
  text-align: left;
}

.b1 {
  height: 44px;
  width: 134.37208557128906px;
  left: 808.744140625px;
  top: 1197px;
  border-radius: 30.5px;
  background: #d9a371;
}

.b2 {
  height: 44px;
  width: 200px;
  left: 808.744140625px;
  top: 1197px;
  border-radius: 30.5px;
  background: #d9a371;
}

.b3 {
  height: 44px;
  width: 134.37208557128906px;
  left: 1286.744140625px;
  top: 1197px;
  border-radius: 30.5px;
  background: #79d3ca;
}
</style>
