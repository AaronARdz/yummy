<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6">
        <h1>Fundación</h1>
        <p>
          Nuestra pastelería se fundo en 2020 en la Ciudad de Monterrey, Nuevo León, México.
          Comenzo como un pequeño sueño de un repostero de abrir su propia pastelería.
        </p>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <img class="cerro" :class="{ 'mb-4' : isMobile}" src="../../assets/img/cerro.jpg" alt="t" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Fundacion",
    created() {
        this.windowWidth = window.innerWidth;
        window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    },
     computed: {
        isMobile() {
        return this.windowWidth <= 768;
    }
  }
  }
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
  margin-top: 30px;
  width: 400px;
  height: 250px;
}
</style>