import axios from "axios";

const newsModule = {
  namespaced: true,
  state: {
    newsList: [],
    Post:[],
    Comment:[],
    checkLoad:true
  },
  getters: {
      newsList: (state)=> state.newsList,
      Post: (state)=> state.Post,
      Comment: (state)=> state.Comment
  },
  mutations: {
    GET_POST(state, res){
        state.newsList = res
       
    },
    DETAIL_POST(state, res){
        state.Post = res
    },
    DETAIL_COMMENT(state, res){
        state.Comment = res
       
    },
    RESET_DETAIL_POST(state){
      state.Post = []
    },
    RESET_DETAIL_COMMENT(state){
      state.Comment = []
    },
    SET_LOADING(state, status){
      state.checkLoad = status
    }
  },
  actions: {
      async getPost({ commit }){
          try {
            
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            // console.log(res.data)
            commit('GET_POST',res.data)
          } catch (error) {
            console.log(error)
          }
      },
      async detailPost({ commit },id){
        try {
          commit('SET_LOADING', true);
          const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          const res1 = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
          commit('SET_LOADING', false);
          

          commit('DETAIL_POST',res.data)
          commit('DETAIL_COMMENT', res1.data)
          // console.log(res1.data)
        } catch (error) {
          console.log(error)
        }
    },
    resetData({commit}){
      commit('RESET_DETAIL_POST')
      commit('RESET_DETAIL_COMMENT')
    }
  },
};

export default newsModule;
