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
    path: "/status/",
    component: () => import("src/layouts/layoutOut.vue"),
    children: [
      {
        path: "",
        name: "statusShow",
        component: () => import("pages/out/statusShow.vue"),
      },
    ],
  },
];

export default routes;
