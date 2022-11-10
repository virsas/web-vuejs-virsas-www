import { h, resolveComponent } from "vue";

const routes = [
  {
    path: "/health/",
    component: {
      render() {
        return "OK";
      },
    },
  },
  {
    path: "/:lang",
    component: {
      render() {
        return h(resolveComponent("router-view"));
      },
    },
    children: [
      {
        path: "",
        component: () => import("layouts/layoutMain.vue"),
        children: [
          {
            path: "",
            name: "homeShow",
            component: () => import("../pages/homeShow.vue"),
          },
        ],
      },
      {
        path: "status",
        component: () => import("layouts/layoutMain.vue"),
        children: [
          {
            path: "",
            name: "statusShow",
            component: () => import("../pages/statusShow.vue"),
          },
        ],
      },
      {
        path: "privacy",
        component: () => import("layouts/layoutMain.vue"),
        children: [
          {
            path: "",
            name: "privacyShow",
            component: () => import("../pages/legal/privacyShow.vue"),
          },
        ],
      },
      {
        path: "terms",
        component: () => import("layouts/layoutMain.vue"),
        children: [
          {
            path: "",
            name: "termsShow",
            component: () => import("../pages/legal/termsShow.vue"),
          },
        ],
      },
      {
        path: "cookies",
        component: () => import("layouts/layoutMain.vue"),
        children: [
          {
            path: "",
            name: "cookiesShow",
            component: () => import("../pages/legal/cookiesShow.vue"),
          },
        ],
      },
    ],
  },
];

export default routes;
