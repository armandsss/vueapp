import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* makes sure we can use `app-alert` Vue component globaly */
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDyyzskctLKjB4PG4A8lWKKF3c-KdddxeI',
      authDomain: 'vueapp-1771d.firebaseapp.com',
      databaseURL: 'https://vueapp-1771d.firebaseio.com',
      projectId: 'vueapp-1771d',
      storageBucket: 'vueapp-1771d.appspot.com'
    })
  }
})
