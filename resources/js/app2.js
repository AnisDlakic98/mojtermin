// imports
import Vue from "vue";
import Gate from "./Gate";
import moment from 'moment';
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from 'vue2-google-maps';
import objectToFormData from 'object-to-formdata';
import { Form, HasError, AlertError } from 'vform';
import { Datetime } from 'vue-datetime';
import VueLadda from "vue-ladda";
import swal from "sweetalert2";
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css';
import VueTimepicker from 'vuejs-timepicker';

import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

// plugins
require('./bootstrap');

// global values
window.Form = Form;
window.Swal = swal;
window.Vue = require('vue');
Vue.use(require('vue-moment'));
window.moment = require('vue-moment');
Vue.prototype.objectToFormData = objectToFormData;
window.Fire = new Vue(); // emit listener

// using
Vue.prototype.$gate = new Gate(window.user); // u master.blade je window.user definisan

Vue.use(Datetime);
Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB1ZMyDgrPystF9YJ_oBIcZ0xIvwfnymO8'
    },
    installComponents: false
});

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
Vue.component('vue-ladda', VueLadda);
Vue.component('datetime', Datetime);
Vue.component('GmapMap', VueGoogleMaps.Map);
Vue.component('GmapMarker', VueGoogleMaps.Marker);
Vue.component('GmapInfoWindow', VueGoogleMaps.InfoWindow);
Vue.component('vue-timepicker', VueTimepicker);


// landing page core
Vue.component('footer-area', require('./landing/core/Footer').default);

// landing page partials
Vue.component('banner', require('./landing/partials/Banner').default);
Vue.component('bradcam', require('./landing/partials/Bradcam').default);
Vue.component('google-map', require('./landing/partials/GoogleMap').default);
Vue.component('fullscreen-modal', require('./landing/partials/Modal').default);
Vue.component('comments', require('./landing/partials/Comments').default);
Vue.component('contact-form', require('./landing/partials/ContactForm').default);
Vue.component('search-salons', require('./landing/partials/SearchSalons').default);
Vue.component('pagination', require('laravel-vue-pagination'));





// Global Filters
Vue.filter("upperText", function(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
});
Vue.filter("formatDate", function(value) {
    return moment(value).format("MMMM Do YYYY");
});
Vue.filter("formatTime", function(value) {
    return moment(value).format("HH:mm");
});
Vue.filter("formatDate2", function(value) {
    return moment(value).format("YYYY-MM-DD");
});


const app = new Vue({
    el: '#app2',
});



