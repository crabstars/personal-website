import { createWebHistory, createRouter } from "vue-router";
//import BlogPage from "@/views/BlogPage.vue";
import BlogList from "@/views/BlogList.vue";
import About from "@/views/AboutMe.vue";
import BlogPage from "@/views/BlogPage.vue";


const routes = [
  {
    path: "/blog",
    name: "BlogList",
    component: BlogList,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/blog/:id",
    name: "BlogExample",
    component: BlogPage,
    props: route => ({ id: parseInt(route.params.id, 10) })
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;