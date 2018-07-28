export default [
  {
    path: "/login",
    component: () => import("@/views/login.vue")
  },
  {
    path: "/",
    component: () => import("@/views/index.vue"),
    children: [
      {
        name: "home",
        path: "/",
        component: () => import("@/views/home.vue")
      },
      {
        name: "user-info",
        path: "/u",
        component: () => import("@/views/user/userInfo.vue")
      },
      {
        name: "video-list-props",
        path: "/vlist/:type/:page",
        props: true,
        component: () => import("@/views/video/videoList.vue")
      },
      {
        name: "video-list",
        path: "/vlist",
        props: true,
        component: () => import("@/views/video/videoList.vue")
      },
      {
        name: "video-item",
        path: "/vitem/:id",
        props: true,
        component: () => import("@/views/video/videoItem.vue")
      },
      {
        name: "image-list-props",
        path: "/ilist/:type/:page",
        props: true,
        component: () => import("@/views/image/imageList.vue")
      },
      {
        name: "image-list",
        path: "/ilist",
        props: true,
        component: () => import("@/views/image/imageList.vue")
      },
      {
        name: "image-item",
        path: "/iitem/:id",
        props: true,
        component: () => import("@/views/image/imageItem.vue")
      },
      {
        name: "text-list-props",
        path: "/tlist/:type/:page",
        props: true,
        component: () => import("@/views/text/textList.vue")
      },
      {
        name: "text-list",
        path: "/tlist",
        props: true,
        component: () => import("@/views/text/textList.vue")
      },
      {
        name: "text-item",
        path: "/titem/:id",
        props: true,
        component: () => import("@/views/text/textItem.vue")
      }
    ]
  }
]
