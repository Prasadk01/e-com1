<!-- eslint-disable no-undef -->
<template>
  <NavBar /> <br />

  <div>ElectronicsView</div>
  <button @click="getdata()" class="btn">click me</button>
  <FooterBarr />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBarr from "@/components/FooterBarr.vue";
// import Vue from "vue";
// import VueAxios from "vue-axios";
import axios from "axios";
// Vue.use(axios);
export default {
  name: "ElectronicsView",
  components: {
    NavBar,
    FooterBarr,
  },
  methods: {
    async getdata() {
      var vm = this;
      await axios
        .get("https://dummyjson.com/products")
        .then(function (response) {
          vm.data = response.data;
          console.log(vm.data);
        })

        .catch(function (error) {
          alert(error);
        });
      //   console.log(vm.data);
    },
    mounted() {
      const dummy = axios.get("https://dummyjson.com/products").then((resp) => {
        console.log(dummy);
        console.log(resp.data.data);
      });
    },
  },
};
</script>

<style scoped></style>
