<template>
  <div class="product-list">
    <div class="product-card" v-for="product in products" :key="product.id">
      <img :src="product.thumbnail" :alt="product.name" class="product-image" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <h5 class="product-price">Rs. {{ product.price }}</h5>
      <button class="btn btn-primary" @click="addToCart(product)">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      cart: [],
    };
  },
  //   mounted() {
  //     axios
  //       .get("https://dummyjson.com/products")
  //       .then((response) => {
  //         this.products = response.data.products;
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   },
  mounted() {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        // Filter products by category
        this.products = response.data.products.filter((product) => {
          return (
            product.category === "smartphones" || product.category === "laptops"
          );
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },

  methods: {
    addToCart(product) {
      // Clone the selected product to avoid modifying the original data
      const selectedProduct = { ...product };
      // Add the product to the cart
      this.cart.push(selectedProduct);
      // Optionally, you can perform additional logic such as displaying a success message, updating totals, etc.
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
.product-list {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  width: 300px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

.product-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 0 auto 10px;
}

.product-price {
  font-weight: bold;
}
</style>
