import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import Create from "../views/Create.vue";
import Tag from "../views/Tag.vue";
import Page404 from "../views/Page404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: Details,
    props: true,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/tag/:tag",
    name: "Tag",
    component: Tag,
  },
  {
    path: "/:catchAll(.*)",
    name: "Page404",
    component: Page404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
