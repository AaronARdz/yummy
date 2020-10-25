<template>
    <div class="carritolleno">
    <div>
        <br>
        <br>
        <h1>TU CARRITO </h1>
    </div>
    <hr>
    <div class="Cback">
        <br>
         <div class="container mt-4">
    <div class="row">
      <div class="col">
        <h2>PRODUCTOS</h2>

        <p>
          <b>Bombóm</b>
          <br>
          Pastel sabor chocolate con relleno y cubierta de queso y ganashe de chocolate.   
          </p>
      </div>
      <div class="col">
        <h3>FECHA</h3>
        <input type="date">
      </div>
      <div class="col">
        <h3>CANTIDAD</h3>
        <input>
      </div>
      <div class="col">
        <h3>PRECIO</h3>
        <input>
      </div>
    </div>
  </div>
    </div>
    <br>
   
    <div class="container"> 
        <div class="row">
        <div class="col-md-9"></div>
        <div class="col-md-3">
        <table class="col-md-5">
            <tr>
                <th class="col1t">CANTIDAD</th>
                <th><input></th>
            </tr>
            <tr>
                <th class="col1t">SUB TOTAL</th>
                <th><input></th>  
            </tr>
            <tr>
                <th class="col1t">TOTAL</th>
                <th><input></th>           
            </tr>
        </table>
        </div>
        </div>
    </div>
    <br>
    <div>
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-2">
                    <h1>IMPORTANTE </h1>
                </div>
                <div class="col-md-10">
                    <ul>
                        <li>Sin excepcion alguna no se haran rembolsos, cancelaciones ni cambios fisicos</li>
                        <li>La entrega se realizara solamente a la persona que se especifique al llenar los datos</li>
                        <li>Debera mostrar el comprobante de compra junto con la identificacion oficial</li>
                        <li>Este es un sistema de venta que NO comtempla la entrega a domicilio. El producto se paga en esta pagina y se recoge en la tienda</li>
                    </ul>
                </div>
            </div>
        </div> 
    </div>
    <br>
    <div>
        <div class="container mt-4">
            <div class="row">
                <div class="col"><button type="button" class="b1" >CANCELAR</button></div>
                <div class="col"><button type="button" class="b2" >SEGUIR COMPRANDO</button></div>
                <div class="col"><button type="button" class="b3" >PAGAR</button> </div>
                   
 
            </div>
        </div> 
    </div>
    <br>
    </div>
    
</template>

<script>
export default {
  name: "CarritoLleno"
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
    background-color: rgba(239, 232, 232, 0.39) ;
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
    background: #D9A371;

}

.b2 {
    height: 44px;
    width: 200px;
    left: 808.744140625px;
    top: 1197px;
    border-radius: 30.5px;
    background: #D9A371;

}

.b3 {
    height: 44px;
    width: 134.37208557128906px;
    left: 1286.744140625px;
    top: 1197px;
    border-radius: 30.5px;
    background: #79D3CA;

}
</style>