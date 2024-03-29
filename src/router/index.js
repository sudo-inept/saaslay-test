import { createRouter, createWebHistory } from "vue-router";
import MainDemo from "../components/MainDemo.vue";
import Blog from "../components/Blog.vue";
import BlogDetails from "../components/BlogDetails.vue";
import Service from "../components/Service.vue";
import ServiceDetails from "../components/ServiceDetails.vue";
import ServiceDetailPage from "../components/details/ServiceDetailPage.vue";
import ProductKnowl from "../components/details/ProductKnowl.vue";
import ProductSlayhub from "../components/details/ProductSlayhub.vue";
import ProductLoopo from "../components/details/ProductLoopo.vue";
import Contact from "../components/Contact.vue";
import PortfolioDetails from "../components/PortfolioDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainDemo,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/service",
      name: "service",
      component: Service,
    },
    {
      path: "/service-details",
      name: "service-details",
      component: ServiceDetails,
    },
    {
      path: "/service-detail",
      name: "service-detail",
      component: ServiceDetailPage,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/blog-details",
      name: "blog-details",
      component: BlogDetails,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/portfolio-details",
      name: "portfolio-details",
      component: PortfolioDetails,
    },
    {
      path: "/productknowl",
      name: "productknowl",
      component: ProductKnowl,
    },
    {
      path: "/productslayhub",
      name: "productslayhub",
      component: ProductSlayhub,
    },
    {
      path: "/productloopo",
      name: "productloopo",
      component: ProductLoopo,
    },
  ],
});

export default router;
