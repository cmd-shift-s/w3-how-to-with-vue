import Vue from 'vue'

Vue.filter('upper', function (str) {
  return str
    ? str.toUpperCase()
    : ''
})
