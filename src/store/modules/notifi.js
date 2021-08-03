

const notifiNumber = {
  namespaced: true,
  state: {
    counter: 1,
    noti:[
      {id:1, img:'https://zxh.io/img/in-post/2021-07-28/header.jpeg', name:'CJ',notification:'Tuyến Đặng vừa chọc bạn' },
      {id:2, img:'', name:'CJ',notification:'Bài viết của bạn được yêu thích bởi <i>CJ</i>' },
      {id:3, img:'', name:'CJ',notification:'Bài viết của bạn được yêu thích bởi <i>CJ</i>' },
      {id:4, img:'', name:'CJ',notification:'Bài viết của bạn được yêu thích bởi <i>CJ</i>' },
      
    ]
  },
  getters: {
    counter: (state)=> state.counter,
    noti: (state)=> state.noti,

  },
  mutations: {
    ADD_COUNT(state){
        state.counter = state.counter + 1
        console.log(state.counter)
    },
 
  },
  actions: {
      addCount(context){
          context.commit('ADD_COUNT')
          
      },
  
    
  },
};

export default notifiNumber;
