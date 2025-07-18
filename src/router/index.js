import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

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
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })
})
