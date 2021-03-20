export default [
  {
    path: "/",
    name: "homepage",
    component: () => import("@/views/Homepage"),
    meta: {
      title: "Homepage",
    },
  },
  {
    path: "/car-selection",
    name: "car-selection",
    component: () => import("@/views/CarSelection"),
    meta: {
      title: "Car Selection",
    },
  },
  {
    path: "/car-details",
    name: "car-details",
    component: () => import("@/views/CarDetails"),
    meta: {
      // requiresAuth: true,
      title: "Car Details",
    },
  },
  {
    path: "/virtual-tour",
    name: "virtual-tour",
    component: () => import("@/views/VirtualTour"),
    meta: {
      // requiresAuth: true,
      title: "Virtual Tour",
    },
  },
  // {
  //   path: "/*",
  //   name: "page-not-found",
  //   component: () => import("@/views/PageNotFound"),
  //   meta: {
  //     title: "404 - Page not found",
  //   },
  // },
];
