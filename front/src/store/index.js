import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import product from './product';
import categories from './categories';
import cart from './cart';

Vue.use(Vuex);
Vue.use(BootstrapVue);

export default new Vuex.Store({
    modules: {
        product,
        categories,
        cart
    }
})