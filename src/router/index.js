import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Nosotros from "@/views/Nosotros";
import Productos from "@/views/Productos";
import Contacto from "@/views/Contacto";
import Carrito from "@/views/Carrito";
import User from "@/views/User";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/Nosotros",
    name: "Nosotros",
    component: Nosotros
  },

  {
    path: "/Productos",
    name: "Productos",
    component: Productos,
  },

  {
    path: "/Cart",
    name: "Carrito",
    component: Carrito,
  },
  {
    path: "/Contacto",
    name: "Contacto",
    component: Contacto,
  },

  {
    path: "/User",
    name: "Usuario",
    component: User,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
