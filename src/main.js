var Vue = require('vue')
var VueRouter = require('vue-router')

/* eslint-disable no-new */
import MainHeader from "./components/Header.vue"
import Siderbar from "./components/Siderbar.vue"
import AppC from "./App.vue"

Vue.use(require('vue-resource'))
Vue.use(VueRouter)

var App = Vue.extend({
  data() {
    return {
      auth: {
        username:"MartnLei",
        display_name:'最魅力',
        roles:{
          display_name:"dis01"
        }
      }
    }
  },
  components: {
    MainHeader,

    Siderbar
  },
  ready: function() {
    //this.$http.get('/admin/fetchAuth').then(function(response) {
    //  this.auth = response.data;
    //});
    $('[data-toggle="tooltip"]').tooltip();
  }
})

var router = new VueRouter({})

router.map({
  '/': {
    name: 'AppC',
    component: AppC
  }
})

router.start(App, '#app')