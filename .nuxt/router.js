import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5d26e0a4 = () => interopDefault(import('../pages/RouterOne.vue' /* webpackChunkName: "pages/RouterOne" */))
const _a9db0234 = () => interopDefault(import('../pages/RouterThree.vue' /* webpackChunkName: "pages/RouterThree" */))
const _2c577ed8 = () => interopDefault(import('../pages/RouterTwo.vue' /* webpackChunkName: "pages/RouterTwo" */))
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
    path: "/RouterOne",
    component: _5d26e0a4,
    name: "RouterOne"
  }, {
    path: "/RouterThree",
    component: _a9db0234,
    name: "RouterThree"
  }, {
    path: "/RouterTwo",
    component: _2c577ed8,
    name: "RouterTwo"
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
