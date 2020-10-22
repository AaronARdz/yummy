import Vue from "vue";
import Vuex from "vuex";

import {auth} from '../firebase'
import router from '../router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    pasteles: [
      {
        id: 1,
        name: "Pastel Aleman",
        precio: "$250.00",
        img: "pastelaleman.png"
      },
      { id: 2, name: "Mostachón de fresa", precio: "$275.00", img: 'mostachon.png'},
      { id: 3, name: "Diplomático", precio: "$280.00" , img: 'diplomatico.png'},
      { id: 4, name: "Pay Tortuga", precio: "$295.00" , img: 'paytortuga.png'},
      { id: 5, name: "Rollo Mango", precio: "$305.00" , img: 'rollomango.png'},
      { id: 6, name: "Pastel de chocolate", precio: "$275.00", img: 'pastel1.png' },
      { id: 7, name: "Rebanada de chocolate", precio: "$50.00" , img: 'pastel2.png'},
      { id: 8, name: "Rebanada de pastel", precio: "$50.00", img: 'pastel3.png'},
      { id: 9, name: "Pastel de bodas", precio: "$450.00" , img: 'p-boda.png'}
    ],
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
    setError(state, payload){
      state.error = payload
    }
  },
  actions: {
    createUser({commit}, user) {
        auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          console.log(res)
          const user = {
            email: res.user.email,
            uid: res.user.uid
          }
          commit('setUser', user)
          router.push('/')
        })
        .catch(error => {
          console.log(error)
          commit('setError', error)
        })
      },
    userLogin({commit}, user){
          auth.signInWithEmailAndPassword(user.email, user.password)
          .then(res => {
              console.log(res)
              const usuario = {
                  email: res.user.email,
                  uid: res.user.uid
              }
              commit('setUser', usuario)
              router.push('/auth')
          })
          .catch(error => {
              console.log(error)
              commit('setError', error)
          })
     },
    detectUser({commit}, user){
        commit('setUser', user);
      },
    logout(){
        auth.signOut()
        router.push('/Login');
    }
    },
  modules: {}
});
