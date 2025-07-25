import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'portfolio',
        component: () => import('pages/PortfolioPage.vue')
      },
      {
        path: 'project/:id',
        component: () => import('pages/DetailPage.vue')
      },
      {
        path: 'resume',
        component: () => import('pages/ResumePage.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ErrorNotFound.vue')
      }
    ]
  }
];

export default routes;
