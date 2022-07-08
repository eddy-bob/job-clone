import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2108f839 = () => interopDefault(import('../pages/router1.vue' /* webpackChunkName: "pages/router1" */))
const _21170fba = () => interopDefault(import('../pages/router2.vue' /* webpackChunkName: "pages/router2" */))
const _2125273b = () => interopDefault(import('../pages/router3.vue' /* webpackChunkName: "pages/router3" */))
const _181b6c43 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/router1",
    component: _2108f839,
    name: "router1"
  }, {
    path: "/router2",
    component: _21170fba,
    name: "router2"
  }, {
    path: "/router3",
    component: _2125273b,
    name: "router3"
  }, {
    path: "/",
    component: _181b6c43,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
