import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _400c699c = () => interopDefault(import('..\\client\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _652b7792 = () => interopDefault(import('..\\client\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _74927049 = () => interopDefault(import('..\\client\\pages\\manage\\index.vue' /* webpackChunkName: "pages/manage/index" */))
const _7f603341 = () => interopDefault(import('..\\client\\pages\\newaccount.vue' /* webpackChunkName: "pages/newaccount" */))
const _72bf6fdc = () => interopDefault(import('..\\client\\pages\\manage\\accountinfo.vue' /* webpackChunkName: "pages/manage/accountinfo" */))
const _798e2e4e = () => interopDefault(import('..\\client\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _400c699c,
    name: "contact"
  }, {
    path: "/faq",
    component: _652b7792,
    name: "faq"
  }, {
    path: "/manage",
    component: _74927049,
    name: "manage"
  }, {
    path: "/newaccount",
    component: _7f603341,
    name: "newaccount"
  }, {
    path: "/manage/accountinfo",
    component: _72bf6fdc,
    name: "manage-accountinfo"
  }, {
    path: "/",
    component: _798e2e4e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
