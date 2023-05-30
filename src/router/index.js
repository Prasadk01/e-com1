import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategorieView from "../views/CategoriesView.vue";
import ElectronicsView from "../views/ElectronicsView.vue";
import BueatyView from "../views/BueatyView.vue";
import HomeDecorView from "../views/HomeDecorView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/categories",
    name: "categories",
    component: CategorieView,
  },
  {
    path: "/electronics",
    name: "electronics",
    component: ElectronicsView,
  },
  {
    path: "/bueatyProduct",
    name: "bueatyProduct",
    component: BueatyView,
  },
  {
    path: "/HomeDecor",
    name: "HomeDecor",
    component: HomeDecorView,
  },
  {
    path: "/wishlist",
    name: "wishlist",
  },
  {
    path: "/cart",
    name: "cart",
  },
  {
    path: "/login",
    name: "login",
  },
  {
    path: "/signup",
    name: "signup",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
