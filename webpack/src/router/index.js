import Vue from 'vue'
import App from '../App.vue'

export default [
    {
        path: '/home',
        component: App.components.home
    },
    {
        path: '/',
        component: App.components.login
    },
    {
        path: '/Hello',
        component: App.components.hello
    }
]