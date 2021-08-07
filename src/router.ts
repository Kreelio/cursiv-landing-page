import { createRouter, createWebHistory, Router, RouteRecordRaw, } from 'vue-router'

const routes = <Array<RouteRecordRaw>>[
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/Home.vue'),
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('./pages/Teams.vue'),
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
