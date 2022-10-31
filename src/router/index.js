import { createWebHistory, createRouter } from "vue-router";
//import BlogPage from "@/views/BlogPage.vue";
import BlogList from "@/views/BlogList.vue";
import About from "@/views/AboutMe.vue";
import BlogPage from "@/views/BlogPage.vue";
import ProjectList from "@/views/ProjectList.vue";
import ProjectPage from "@/views/ProjectPage.vue";
import ErrorPage from "@/views/ErrorPage.vue"

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
    name: "BlogSelected",
    component: BlogPage,
    props: route => ({ id: parseInt(route.params.id, 10) })
  },
  {
    path: "/projects",
    name: "ProjectList",
    component: ProjectList,
  },
  {
    path: "/projects/:id",
    name: "ProjectSelected",
    component: ProjectPage,
    props: route => ({ id: parseInt(route.params.id, 10) })
  },
  {
    path: "/",
    redirect: "/about"
  },
  {
    path: '/:catchAll(.*)',
    name: 'ErrorPage',
    component: ErrorPage
 }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;