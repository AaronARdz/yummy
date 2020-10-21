<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="align-middle text-center">
          <div class="mt-5 ">
            <div class="w-100 header__text mt-5">
              <h1 class="mt-5 pt-5">Que se te antoja?</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="text-center mb-4">
          <img src="../../assets/img/p-bg.png" alt="" style="max-width: 100%" />
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
.header__text p {
  font-weight: 300;
}

h1 {
  font-weight: 700;
  font-size: 5em;
  color: #fff4f4;
  text-shadow: 0px 4px 4px rgba(1, 1, 1, 0.76);
}
</style>
