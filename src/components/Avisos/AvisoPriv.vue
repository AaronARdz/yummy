<template>
  <div>
    <div class="background">
      <app-nav></app-nav>
    </div>
    <div class="container">
      <br>
      <h2>AVISO DE PRIVACIDAD</h2>
      <br>
      <div class="container border rounded ">
        <ul>
          <h4>¿Qué Datos Personales acerca de los Clientes recaba Yummy?</h4>
          <p>Recopilamos sus datos personales con el fin de proporcionar y mejorar continuamente nuestros productos y servicios.

            Estos son los tipos de datos personales que recabamos:</p>
          <li>Datos que Usted Nos Proporciona: Recibimos y almacenamos todos los datos que usted nos proporciona en relación con los Servicios de Yummy. Haga clic aquí para ver algunos ejemplos de la información que recopilamos. Puede elegir no proporcionar ciertos datos, sin embargo, podría no ser capaz de aprovechar muchos de nuestros Servicios de Yummy.</li>
          <li>Datos Automáticos: Recopilamos y almacenamos automáticamente determinados tipos de datos acerca de su uso de los Servicios de Yummy, incluyendo datos acerca de su interacción con el contenido y los servicios disponibles a través de los Servicios de Yummy. Como en muchos sitios, utilizamos "cookies" y otros identificadores, donde obtenemos cierto tipo de información cuando su navegador o dispositivo acceda a los Servicios de Yummy y a otros contenidos servidos por o en nombre de Yummy en otros sitios web. Haga clic aquí para ver ejemplos de lo que recopilamos.</li>
          <li>Datos de otras Fuentes: Es posible que recibamos datos sobre usted de otras fuentes, como información actualizada de entrega y dirección de nuestros transportistas, que usamos para corregir nuestros registros y entregar su próxima compra más fácilmente. Haga Clic aquí para ver ejemplos adicionales de la información que recibimos.</li>
          <br>
          <h4>¿Con qué Fines utiliza Yummy sus Datos Personales?</h4>
          <p>Utilizamos sus datos personales para operar, proporcionar, desarrollar y mejorar los productos y servicios que ofrecemos a nuestros clientes. Las finalidades primarias incluyen:</p>
          <li>Compra y entrega de productos y servicios. Usamos sus datos personales para tomar y manejar pedidos, entregar productos y servicios, procesar pagos y comunicarnos con usted acerca de pedidos, productos y servicios, y ofertas promocionales.</li>
          <li>Proporcionar, solucionar problemas y mejorar los Servicios de Yummya. Utilizamos sus datos personales para proporcionar funcionalidad, analizar el rendimiento, corregir errores y mejorar la usabilidad y eficacia de los Servicios de Yummy.</li>
          <li>Cumplir con nuestras obligaciones legales. En algunos casos, recopilamos y utilizamos sus datos personales para cumplir con las leyes aplicables. Por ejemplo, recopilamos de los vendedores datos sobre el lugar de establecimiento y la información de la cuenta bancaria para verificar la identidad y otros fines.</li>
          <li>Comunicarnos con usted. Utilizamos sus datos personales para comunicarnos con usted en relación con los Servicios de Yummy a través de diferentes canales (por ejemplo, por teléfono, correo electrónico, chat).</li>
          <li>Prevención de Fraude y Riesgos de Crédito. Utilizamos datos personales para prevenir y detectar fraudes y abusos con el fin de proteger la seguridad de nuestros clientes, Yummy y otros. También podemos utilizar métodos de puntuación para evaluar y gestionar los riesgos crediticios.</li>
          <li>Verificar su identidad.</li>
          <br>
          <p>De manera adicional, podremos utilizar sus datos personales para las siguientes finalidades secundarias:</p>
          <li>Publicidad. Utilizamos sus datos personales para mostrar anuncios basados en intereses de características, productos y servicios que puedan ser de su interés. No utilizamos datos que lo identifiquen personalmente para mostrar anuncios basados en intereses. Para obtener más información, lea nuestro aviso Basado en Intereses.</li>
          <li>Marketing. Utilizamos sus datos personales para enviarle correos electrónicos u otras comunicaciones sobre características, productos y servicios que puedan ser de su interés. Si no desea recibir correos electrónicos u otras comunicaciones nuestras, por favor ajuste sus Preferencias de Comunicación con el Cliente.</li>
        </ul>
      </div>
      <br>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>


import Footer from "@/components/Body/Footer";
import HeaderAvisos from "@/components/Header/HeaderAvisos";

export default {
  name: "tyc",
  components:{
    appNav: HeaderAvisos,
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
</style>s