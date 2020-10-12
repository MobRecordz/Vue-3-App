import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PostsPage from '../views/PostsPage.vue'
import CurrentPostPage from '../views/CurrentPostPage.vue'

const routes: Array<RouteRecordRaw> = [
  // { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/posts' },
  {
    path: '/',
    redirect: '/posts'
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostsPage
  },
  {
    path: '/posts:id',
    name: 'CurrentPost',
    component: CurrentPostPage
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
