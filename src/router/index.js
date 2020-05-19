import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Clubs from "../views/Clubs.vue";

Vue.use(VueRouter);

// var currentID = null;

// function generateID() {
//   var id = new Date().valueOf();
//   // currentID = id;
//   return id.toString();
// }

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/clubs",
    name: "Clubs",
    component: Clubs,
  },
  {
    path: "/room/:id",
    name: "Private Room",
    props: true,
    // props: {
    //   id: generateID(),
    // },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
