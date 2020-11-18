<template>
<div>
  <div class="background">
    <app-login></app-login>
  </div>
  <app-footer></app-footer>
</div>


</template>

<script>
import Footer from "@/components/Body/Footer.vue";
import Login from "@/components/Auth/Login.vue"

export default {
    components: {
      appFooter: Footer,
      appLogin: Login
    }
  }
</script>

<style scoped>
  .Temporalmente{
    font-size: 100px;
    color: white;
  }
  .background{
    background-color: whitesmoke;
  }
</style>