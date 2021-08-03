import Vue from 'vue'
import Vuex from 'vuex'
import newsList from './modules/news'
import notifi from './modules/notifi'

Vue.use(Vuex)
const storeData = {
    modules: {
        newsList,
        notifi
    } 
}

const store = new Vuex.Store(storeData)

export default store