<template>
  <div class="container mt-3">
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
</style>
