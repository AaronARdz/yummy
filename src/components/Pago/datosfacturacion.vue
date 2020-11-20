<template>
  <div>
    <div class="background">
      <app-header></app-header>
    </div>
    <div class="container">
      <br>
      <h2>
        Confirmar Datos de Facturacion
      </h2>
        <div class="form-row mt-4">
          <div class="form-group col-md-6">
            <label>Nombre:</label>
            <input type="text" class="form-control" required placeholder="Tu nombre">
          </div>
          <div class="form-group col-md-6">
            <label>Apellido:</label>
            <input type="text" class="form-control" required placeholder="Tu apellido">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Teléfono:</label>
            <input type="text" class="form-control"  required placeholder="11 - 22 - 33 -44">
          </div>
          <div class="form-group col-md-6">
            <label>Dirección:</label>
            <input type="text" class="form-control" required placeholder="Direccion de casa">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col ">
            <label>Persona que recoge el producto:</label>
            <input type="text" class="form-control" required placeholder="Nombre de la persona">
          </div>
        </div>
      <br>
      <div class="container">
        <div class="row">
          <div class="col">
            <router-link to="/tyc"
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

export default {
name: "datos",
  components:{
    appHeader: HeaderPago,
    appFooter: Footer,
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
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