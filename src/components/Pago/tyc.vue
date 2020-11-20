<template>
  <div>
    <div class="background">
      <app-nav></app-nav>
    </div>
    <div class="container">
      <br>
      <h2>TERMINOS Y CONDICIONES</h2>
      <br>
      <div class="container border rounded ">
        <ul>
          <li>Este sistema es solo de venta NO de reserva de producto.</li>
          <li>Para utilizar este sistema de compra, solo es válido como forma de pago una tarjeta de Crédito.</li>
          <li>El monto mínimo de compra para realizar la transacción vía internet es de $200, las compras incluyen solo producto de línea, ya sea repostería o pastel habilitados en esta página.</li>
          <li>La compra no incluye la entrega a domicilio, es responsabilidad del cliente recoger el producto en la sucursal elegida dentro del proceso de compra, la cual aparecerá impresa en el comprobante.</li>
          <li>La compra solo se entregará en la fecha estipulada en el pedido, y solo tendrá vigencia por 24 horas a partir de la hora de completar la compra en el sistema.</li>
          <li>El cliente deberá de revisar todos los datos de compra antes de finalizar el pedido ya que no habrá cambios de producto, reembolsos ni cancelación de transacciones.</li>
          <li>El horario de compra en la página de internet aplica las 24 horas, sin embargo, deberá de tomar en cuenta que las entregas solo serán dentro de las 24 horas de haber realizado la compra y de acuerdo a los horarios de venta de las sucursales. Las compras que se realicen de las 7 p.m. en adelante, podrán entregarse hasta el siguiente día como límite a la 1 p.m. El resto de las compras deberán de recogerse el mismo día.</li>
          <li>El horario de entrega es de 9 a.m. a 7 p.m. de lunes a domingo. En días festivos es de 10 a.m. a 6 p.m.</li>
          <li>Es responsabilidad del cliente cumplir con este horario de entrega, de lo contrario Pastelería Yummy no se hace responsable por almacenar el producto por más de 24 horas, y no se reembolsará el producto ni dinero, esto sin excepción alguna.</li>
          <li>El cliente deberá imprimir el comprobante de la compra o mostrarlo desde el celular al momento de recoger el producto, así mismo una identificación oficial con fotografía.</li>
          <li>Al momento de recoger el pedido de compra en la tienda, es indispensable que el cliente firme el ticket como comprobante de la entrega.</li>
          <li>Para cualquier reclamación de producto deberá de conservar su comprobante de compra emitido y enviado a su correo electrónico.</li>
        </ul>
      </div>
      <br>
      <p>Favor de hacer clic en el recuadro donde se aceptan los terminos y condiciones para realizar su compra</p>
      <div class="form-check">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="check" v-model="check">
          <label class="form-check-label" for="inlineCheckbox1">Acepto los terminos y condiciones</label>
        </div>
      </div>
      <br>
      <div class="container">
        <div class="row">
          <div class="col">
            <router-link to="/auth"
            ><button type="button" class="b2">
              Cancelar
            </button></router-link>
          </div><div class="col">
          <router-link to="/dfact" v-if="check==true"
          ><button type="button" class="b3">
            Siguiente
          </button></router-link>
        </div>
      </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>


import HeaderPago from "@/components/Header/HeaderPago";
import Footer from "@/components/Body/Footer";

export default {
name: "tyc",
  components:{
    appNav: HeaderPago,
    appFooter: Footer,
  },
  data(){
    return{
      check: false,
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
h2{
  color: #d9a371;
}
li{
  text-align: justify;
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

@media screen and (max-width: 500px){
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