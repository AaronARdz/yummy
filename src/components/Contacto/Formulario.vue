<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-6" col-md-4>
        <img class="icon" src="../../assets/img/fb-white.png"/>
        <h4>Facebook <br> @pasteleriaYummy</h4>
        <img class="icon" src="../../assets/img/location-white.png"/>
        <h4>Dirección <br> 13, Gonzalitos, 64020 Monterrey, N.L.</h4>
        <img class="icon" src="../../assets/img/phone-white.png"/>
        <h4>Teléfono <br>(81) 2025 2050</h4>
        <img class="icon" src="../../assets/img/insta-white.png"/>
        <h4>Instagram <br>@yummy_pasteleria</h4>
        <img class="icon" src="../../assets/img/twitter-white.png"/>
        <h4>Twitter <br>@yummy_pasteleria</h4>
      </div>
      <div class="col-6" col-md-4>
        <div class="Contacto">
          <br>
          <div class="Labels">
            <br>
            <p>Contactanos !</p>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Nombre</span>
              <input
                  type="text"
                  class="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Correo@</span>
              <input
                  type="text"
                  class="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Tel +</span>
              <input
                  type="text"
                  class="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">Motivo</span>
              </div>
              <textarea class="form-control" aria-label="Motivo"></textarea>
            </div>
            <button type="button" class="btn btn-warning">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    };
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
.icon{;
  text-align: left;
  width: 50px;
  height: 50px;
  margin-right: 900px;
  margin-bottom: -80px;
}
.Contacto{
  width: 600px;
  height: 350px;
  background-image: url("../../assets/img/bg.png");
  margin-top: 50px;
  margin-bottom: 100px;
}
.Labels{
  margin-left: 40px;
  width: 500px;
}

</style>
