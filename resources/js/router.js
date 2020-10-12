import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
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
        }
    ],
    mode: "history"
});