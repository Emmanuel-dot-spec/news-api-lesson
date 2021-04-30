import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
// 
import axios from "axios";
// 

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default new Vuex.Store({
    state: {
        allNews: [],
        loading: false
    },
    getters: {
        getAllNews: (state) => state.allNews,
        getLoading: (state) => state.loading
    },
    mutations: {
        setAllNews: (state, payload) => { state.allNews = payload; },
        setLoading: (state, payload) => { state.loading = payload; }
    },
    actions: {
        fetchAllNews: ({ commit }, payload) => {
            const {
                category = ''
            } = payload;

            try {
                commit('setLoading', true)
                axios.get(`https://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=0d551638acd745999482289b4babb0b1`)
                    .then((res) => {
                        // console.log(res.data.articles);
                        commit('setAllNews', res.data.articles);
                        commit('setLoading', false);

                    })
            } catch (error) {
                console.log(error);
            }
        }
    },
    modules: {},
    plugins: [vuexLocal.plugin]
})