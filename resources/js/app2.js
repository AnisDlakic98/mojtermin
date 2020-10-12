// imports
import Vue from "vue";
import Gate from "./Gate";
import moment from 'moment';
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from 'vue2-google-maps';

// plugins
require('./bootstrap');

// global values
window.Vue = require('vue');
window.Fire = new Vue(); // emit listener

// using
Vue.prototype.$gate = new Gate(window.user); // u master.blade je window.user definisan

Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB1ZMyDgrPystF9YJ_oBIcZ0xIvwfnymO8'
    },
    installComponents: false
});

Vue.component('GmapMap', VueGoogleMaps.Map);
Vue.component('GmapMarker', VueGoogleMaps.Marker);
Vue.component('GmapInfoWindow', VueGoogleMaps.InfoWindow);

// landing page core
Vue.component('footer-area', require('./landing/core/Footer').default);

// landing page partials
Vue.component('banner', require('./landing/partials/Banner').default);
Vue.component('bradcam', require('./landing/partials/Bradcam').default);
Vue.component('google-map', require('./landing/partials/GoogleMap').default);

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



