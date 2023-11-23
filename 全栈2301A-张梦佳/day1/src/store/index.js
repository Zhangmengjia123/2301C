import Vue from 'vue'
import Vuex from 'vuex'
import vuexp from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    store: [],
    all: false
  },
  getters: {
    checkNums(state) {
      var newArr = state.store.filter((item) => {
        return item.isCheck == true
      })
      return newArr.length
    },
    checkNum(state){
      var newArrs = state.store.filter((item) => {
        return item.isCheck == false
      })
      return newArrs.length
    }
  },
  mutations: {
    obj(state, obj) {
      state.store.unshift(obj)
    },
    checkOne(state, index) {
      console.log(index);

      state.store[index].isCheck = !state.store[index].isCheck
      state.all = state.store.every((item) => {
        return item.isCheck == true
      })
    },
    checkAll(state) {
      state.all = !state.all
      console.log(state.all);
      state.store.forEach(item => {
        item.isCheck = state.all
      })
    },
    del(state, index) {
      state.store.splice(index, 1)
    },
    dels(state){
   state.store=state.store.filter(item=>item.isCheck==false)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexp()]
})
