<template>
<div class="container">
    <div class="row">
        <div class="col-md-6 col-12 text-center">
            <div style="height: 400px" :class="{ 'mt-4' : !isMobile}">
                <img class="pastel" src="../../assets/img/p-cumpleanos.png" alt="">
            </div>
        </div>
        <div class="col-md-6 col-12 text-center align-self-center" v-if="!isMobile">
            <div style="height: 400px" class="mt-4">
               <img class="pastel" src="../../assets/img/pastel1.png" alt="">
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.pastel {
  max-width: 100%;
  height: 350px;
}
.h-a {
    height: auto;
}

</style>

<script>

export default {
    data() {
        return {
            desktopMargin: 'mt-4',
        }
    },
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
