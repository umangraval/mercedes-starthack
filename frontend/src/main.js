import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './assets/css/main.css'
import Routes from './router/router.js'
import i18n from './plugins/i18n'
import _ from 'lodash'

Vue.config.productionTip = false

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: Routes
});

router.beforeEach((to, from, next) => {
  const default_title = "Mercedes"
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!localStorage.getItem("token")) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })

    } else {
      next()

      // update browser document title
      Vue.nextTick(() => {
        document.title = to.meta.title + " | " + default_title || default_title;
      });

    }
  } else {
    next() // make sure to always call next()!

    // update browser document title
    Vue.nextTick(() => {
      document.title = to.meta.title + " | " + default_title || default_title;
    });

  }
})


new Vue({
  el: '#app',
  router: router,
  vuetify,
  i18n,
  _,
  render: h => h(App)
});