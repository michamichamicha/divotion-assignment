import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import products from '@/store/modules/products'
const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
})
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        products,
    },
    plugins: [vuexLocal.plugin],
})
