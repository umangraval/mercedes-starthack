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
    path: "/car-details-a",
    name: "car-details-a",
    component: () => import("@/views/CarDetailsA"),
    meta: {
      title: "Car Details - Class A",
    },
  },
  {
    path: "/car-details-b",
    name: "car-details-b",
    component: () => import("@/views/CarDetailsB"),
    meta: {
      title: "Car Details - Class B",
    },
  },
  {
    path: "/car-details-e",
    name: "car-details-e",
    component: () => import("@/views/CarDetailsE"),
    meta: {
      title: "Car Details - Class E",
    },
  },
  {
    path: "/car-details-g",
    name: "car-details-g",
    component: () => import("@/views/CarDetailsG"),
    meta: {
      title: "Car Details - Class G",
    },
  },
  
  {
    path: "/virtual-tour",
    name: "virtual-tour",
    component: () => import("@/views/VirtualTour"),
    meta: {
      title: "Virtual Tour",
    },
  },
  {
    path: "/engine-specs",
    name: "engine-specs",
    component: () => import("@/views/EngineSpecs"),
    meta: {
      title: "Engine Specifications",
    },
  },
  {
    path: "/*",
    name: "page-not-found",
    component: () => import("@/views/PageNotFound"),
    meta: {
      title: "404 - Page not found",
    },
  },
];
