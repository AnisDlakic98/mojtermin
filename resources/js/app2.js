// imports
import Vue from "vue";
import Gate from "./Gate";
import moment from 'moment';

// plugins
require('./bootstrap');

// global values
window.Vue = require('vue');
window.Fire = new Vue(); // emit listener

// using
Vue.prototype.$gate = new Gate(window.user); // u master.blade je window.user definisan

// landing page core
Vue.component('navigation', require('./landing/core/Navbar').default);
Vue.component('footer-area', require('./landing/core/Footer').default);

// landing page partials
Vue.component('banner', require('./landing/partials/Banner').default);
Vue.component('salon-card', require('./landing/partials/SalonCard').default);
Vue.component('bradcam', require('./landing/partials/Bradcam').default);

// Global Filters
Vue.filter("upperText", function(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
});
Vue.filter("formatDate", function(value) {
    return moment(value).format("MMMM Do YYYY");
});

const app = new Vue({
    el: '#app2',
});



