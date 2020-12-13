// imports
import Vue from "vue";
import router from "./router";
import { Form, HasError, AlertError } from 'vform';
import moment from 'moment';
import VueProgressBar from "vue-progressbar";
import swal from "sweetalert2";
import Gate from "./Gate";
import VueLadda from "vue-ladda";
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from 'vue2-google-maps';

// variables
const options = {
    color: "#3490dc",
    failedColor: "#DC0638",
    thickness: "5px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 300
    },
    autoRevert: true,
    inverse: false
};

const toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000
});

// plugins
require('./bootstrap');
require('admin-lte');

// global values
window.Vue = require('vue');
window.Form = Form;
window.swal = swal;
window.toast = toast;
window.Fire = new Vue(); // emit listener


// using
Vue.use(VueProgressBar, options);
Vue.prototype.$gate = new Gate(window.user); // u master.blade je window.user definisan
Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB1ZMyDgrPystF9YJ_oBIcZ0xIvwfnymO8'
    },
    installComponents: false
});

// registring partials
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
Vue.component('not-found', require('./components/NotFound').default);
Vue.component('image-uploader', require('./components/ImageUploader').default);
Vue.component('vue-ladda', VueLadda);
Vue.component('GmapMap', VueGoogleMaps.Map);
Vue.component('GmapMarker', VueGoogleMaps.Marker);
Vue.component('GmapInfoWindow', VueGoogleMaps.InfoWindow);


import VueI18n from 'vue-i18n'; //needed for calendar locale
Vue.use(VueI18n);

import {messages} from 'vue-bootstrap-calendar'; // you can include your own translation here if you want!

window.i18n = new VueI18n({
    locale: 'en',
    messages
});


// Global Filters
Vue.filter("upperText", function(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
});
Vue.filter("formatDate", function(value) {
    return moment(value).format("MMMM Do YYYY");
});




const app = new Vue({
    el: '#app',
    i18n,
    router
});


