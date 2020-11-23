export { default as Logo } from '../..\\client\\components\\Logo.vue'
export { default as VuetifyLogo } from '../..\\client\\components\\VuetifyLogo.vue'
export { default as KrakenFooter } from '../..\\client\\components\\General\\krakenFooter.vue'
export { default as KrakenHeader } from '../..\\client\\components\\General\\krakenHeader.vue'

export const LazyLogo = import('../..\\client\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../..\\client\\components\\VuetifyLogo.vue' /* webpackChunkName: "components_VuetifyLogo" */).then(c => c.default || c)
export const LazyKrakenFooter = import('../..\\client\\components\\General\\krakenFooter.vue' /* webpackChunkName: "components_General/krakenFooter" */).then(c => c.default || c)
export const LazyKrakenHeader = import('../..\\client\\components\\General\\krakenHeader.vue' /* webpackChunkName: "components_General/krakenHeader" */).then(c => c.default || c)
