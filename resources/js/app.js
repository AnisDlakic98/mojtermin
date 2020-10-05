// imports
import Vue from "vue";
import router from "./router";
import { Form, HasError, AlertError } from 'vform';
import moment from 'moment';
import VueProgressBar from "vue-progressbar";
import swal from "sweetalert2";
import Gate from "./Gate";


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

// registring partials
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
// Vue.component('passport-clients', require('./components/passport/Clients.vue').default);
// Vue.component('passport-authorized-clients', require('./components/passport/AuthorizedClients.vue').default);
// Vue.component('passport-personal-access-tokens', require('./components/passport/PersonalAccessTokens.vue').default);
Vue.component('not-found', require('./components/NotFound').default);


// Global Filters
Vue.filter("upperText", function(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
});
Vue.filter("formatDate", function(value) {
    return moment(value).format("MMMM Do YYYY");
});




const app = new Vue({
    el: '#app',
    router
});


