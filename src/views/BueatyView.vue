<template>
  <NavBar />

  <div>
    <h1>Bueaty Product</h1>
  </div>

  <BueatyProductComp />

  <FooterBarr />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBarr from "@/components/FooterBarr.vue";
import BueatyProductComp from "@/components/BueatyProductComp.vue";

export default {
  name: "BueatyProductView",
  components: {
    NavBar,
    FooterBarr,
    BueatyProductComp,
  },
};
</script>

<style scoped>
h1 {
  justify-content: center;
  display: flex;
}
</style>
