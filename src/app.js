import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './router'
import * as filters from './filters'
import app from './main'

// Router
Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

routerConfig(router)

// Resource
Vue.use(VueResource)

Vue.http.options.root = '/data/'
Vue.http.options.emulateJSON = true

// Directive

// Filters
Vue.filter('date', filters.dateFilter)

router.start(app, '#app')

window.router = router
