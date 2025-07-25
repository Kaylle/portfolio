import { defineRouter } from '#q-app/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import routes from './routes';

export default defineRouter(function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory;

  return createRouter({
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition)
        return savedPosition
      if (to.hash)
        return {
          el: to.hash,
          top: 100,
          behavior: 'smooth'
        }
      return { x: 0, y: 0 }
    },
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });
});
