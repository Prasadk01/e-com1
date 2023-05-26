<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a
        ><router-link to="/" class="navbar-item">
          <!-- <img src="../assets/logo.png" alt="Logo" />  -->
          <strong>Ghebaba</strong>
        </router-link></a
      >

      <div class="navbar-burger burger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': menuActive }">
      <div class="search-bar">
        <input type="text" placeholder="Search" />
        <button>Go</button>
      </div>
      <div class="navbar-start">
        <router-link
          to="/categories"
          class="navbar-item"
          style="
             {
              color: white;
            }
          "
          >Categories</router-link
        >
        <router-link to="/wishlist" class="navbar-item mdi mdi-heart"
          >Wishlist</router-link
        >

        <router-link to="/cart" class="navbar-item mdi mdi-cart"
          >Cart</router-link
        >
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/login" class="button is-primary">
              <strong>Login</strong>
            </router-link>
            <router-link to="/signup" class="button is-light">
              Sign up
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>

<style>
.navbar {
  background-color: #24262b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
a {
  color: white;
  text-decoration: none;
}

.navbar-brand img {
  height: 3rem;
}

.navbar-burger {
  display: block;
  color: #333333;
  cursor: pointer;
  font-size: 1.5rem;
}

.navbar-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-start {
  margin-right: 2rem;
}

.navbar-item {
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;
}

.navbar-item:hover {
  background-color: #f5f5f5;
}
.search-bar button {
  background-color: #333333;
  color: #ffffff;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.search-bar {
  margin-left: 0.5rem;
}
.search-bar input[type="text"] {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 1rem;
  font-size: 1rem;
  width: 30rem;
}
.buttons {
  display: flex;
  align-items: center;
}

.buttons .button {
  margin-left: 1rem;
}
</style>
