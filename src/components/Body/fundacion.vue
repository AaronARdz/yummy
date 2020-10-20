<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <h1>Fundación</h1>
        <p>
          Nuestra pastelería se fundo en 2020 en la Ciudad de Monterrey, Nuevo León, México.
          Comenzo como un pequeño sueño de un repostero de abrir su propia pastelería.
        </p>
      </div>
      <div class="col">
        <img class="cerro" src="../../assets/img/cerro.jpg" alt="logo Technobit" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Fundacion"
};
</script>

<style scoped>

h1 {
  text-align: left;
  margin-top: 100px;
  color: white;
}
.text-aqua p {
  color: var(--aqua) !important;
}
p{
  text-align:left;
  margin-right: 0px;
  margin-bottom: 100px;
}
.cerro{
  margin-top: 40px;
  width: 400px;
  height: 250px;
}
</style>
