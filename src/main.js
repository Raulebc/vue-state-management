import Vue from 'vue';
import App from './App.vue';
import "tailwindcss/tailwind.css"


Vue.config.productionTip = false;

// eslint-disable-next-line no-unused-vars
var vm = new Vue({
    render: h => h(App),
}).$mount('#app')
