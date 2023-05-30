<template>
  <NavBar />

  <div>
    <h1>Home Decoration Product</h1>
  </div>

  <HomeDecorComp />

  <FooterBarr />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBarr from "@/components/FooterBarr.vue";
import HomeDecorComp from "@/components/HomeDecorComp.vue";

export default {
  name: "BueatyProductView",
  components: {
    NavBar,
    FooterBarr,
    HomeDecorComp,
  },
};
</script>

<style scoped>
h1 {
  justify-content: center;
  display: flex;
}
</style>
