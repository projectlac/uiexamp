import Vue from 'vue'
import Vuex from 'vuex'
import newsList from './modules/news'

Vue.use(Vuex)
const storeData = {
    modules: {
        newsList
    } 
}

const store = new Vuex.Store(storeData)

export default store