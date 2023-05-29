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
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
}

.product-card {
  width: 300px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.product-details {
  padding: 20px;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-description {
  font-size: 14px;
  color: #888888;
  margin-bottom: 10px;
}

.product-price {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007bff;
  color: #ffffff;
  font-size: 14px;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
}

.btn-primary:active {
  background-color: #0056b3;
}

.btn-primary:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
}
</style>
