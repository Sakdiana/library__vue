import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layouts/Layout.vue";
import { RouterLink } from 'vue-router';
import Home from "../views/Home.vue";
import NewBooks from "@/views/NewBooks.vue";
import Cart from "@/views/Cart.vue";
import PopularBooks from "@/views/PopularBooks.vue";
import Favorite from "@/views/Favorite.vue";
import Login from "@/views/Login.vue";
import BookPage from "@/components/BookPage.vue";



const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "", component: Home },
      { path: "/newBooks", component: NewBooks },
      { path: "/popularBooks", component: PopularBooks },
      { path: "/cart", component: Cart },
      { path: "/favorite", component: Favorite },
      { path: "/login", component: Login },
       { path: '/book/:id', component: BookPage }




    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
