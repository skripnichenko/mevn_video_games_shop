import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart.vue'),
  },
  {
    path: '/products',
    name: 'ProductPage',
    component: () => import('@/views/Product.vue'),
    props: route => ({ id: route.query.id }),
  },
  {
    name: 'notFound',
    path: '*',
    component: () => import('@/views/AppNotFound.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
