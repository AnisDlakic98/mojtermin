import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        // owner
        {
            path: "/owner",
            redirect: '/profile'
        },
        {
            path: "/dashboard",
            component: () => import("./components/Dashboard")
        },
        {
            path: "/profile",
            component: () => import("./components/Profile")
        },
        {
            path: "/users",
            component: () => import("./components/Users")
        },
        {
            path: "/developer",
            component: () => import("./components/Developer")
        },
        {
            path: "/services",
            component: () => import("./components/services/Services")
        },
        {
            path: "/location",
            component: () => import("./components/Location")
        },

        // customer
        {
            path: "/user",
            redirect: '/profile-details'
        },
        {
            path: "/appointments",
            component: () => import("./components/customer/Appointments")
        },
        {
            path: "/activity",
            component: () => import("./components/customer/Activity")
        },
        {
            path: "/profile-details",
            component: () => import("./components/customer/Profile")
        },
        // superadmin
        {
            path: "/superadmin",
            redirect: "/administration/profile",
        },
        {
            path: "/administration/profile",
            component: () => import("./components/superadmin/Profile")
        },
        {
            path: "/administration/testimonials",
            component: () => import("./components/superadmin/Testimonials")
        },
        {
            path: "/administration/about",
            component: () => import("./components/superadmin/About")
        },
        {
            path: "/administration/contact",
            component: () => import("./components/superadmin/Contact")
        },
        {
            path: "/administration/faqs",
            component: () => import("./components/superadmin/Faqs")
        },
        // 404
        {
            path: "/*",
            component: () => import("./components/errors/404")
        },
    ],
    mode: "history",
    transitionOnLoad: true,
});