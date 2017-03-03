// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import routes from './router'

Vue.config.productionTip = false



Vue.use(ElementUI);

Vue.use(Router);

const router = new Router({
    routes
});

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')