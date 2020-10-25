import Vue from "vue";
import Vuex from "vuex";

import {auth, db} from '../firebase'
import router from '../router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    loading: false,
    pasteles: [
      {
        id: 1,
        name: "Pastel Aleman",
        price: "$250.00",
        category: '',
        img: "pastelaleman.png"
      },
      { id: 2, name: "Mostachón de fresa", price: "$275.00",category: '', img: 'mostachon.png'},
      { id: 3, name: "Diplomático", price: "$280.00",category: '', img: 'diplomatico.png'},
      { id: 4, name: "Pay Tortuga", price: "$295.00" ,category: '', img: 'paytortuga.png'},
      { id: 5, name: "Rollo Mango", price: "$305.00" ,category: '', img: 'rollomango.png'},
      { id: 6, name: "Pastel de chocolate", price: "$275.00",category: '', img: 'pastel1.png' },
      { id: 7, name: "Rebanada de chocolate", price: "$50.00" ,category: '', img: 'pastel2.png'},
      { id: 8, name: "Rebanada de pastel", price: "$50.00",category: '', img: 'pastel3.png'},
      { id: 9, name: "Pastel de bodas", price: "$450.00" ,category: '', img: 'p-boda.png'}
    ],
    pastel : {
      id: '',
      name: '',
      category: '',
      price: '',
      img: '',
    },
    shoppingCart: [],
    carrito: [],
    text: ''
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
    setError(state, payload){
      state.error = payload
    },
    setCarrito(state,payload) {
      state.shoppingCart = payload
    },
    loadFirebase(state, payload) {
      state.loading = payload
    },
    setPastel(state, payload) {
      state.pastel = payload
    }
  },
  actions: {
    finder({state}, payload) {
      console.log(payload);
      state.text = payload.toLowerCase();
    },
    addPastel({commit, state}, pastel) {
      commit('loadFirebase', true);
      db.collection(state.user.email).add({
        pastel : pastel
      })
      .then(doc => {
        commit('loadFirebase', false);
        console.log("added" + doc.id)
        router.push('/')
      })
    },
    deletePastel({state}, id) {
      db.collection(state.user.email).doc(id).delete()
      .then(() => {
        console.log('deleted job')
        this.dispatch('getJobs')
      })
    },
    getCarrito({commit, state},){
      commit('loadFirebase', true);
      const pasteles = []
      db.collection(state.user.email).get()
      .then(res => {
        res.forEach(doc => {
          let pastel = doc.data()
          pastel.id = doc.id
          pasteles.push(pastel)
        })
        setTimeout(() => {
          commit('loadFirebase', false);
        }, 2000)
        
        commit('setCarrito', pasteles)
      })
    },
    getPastel({commit, state}, pastelId){
      db.collection(state.user.email).doc(pastelId).get()
      .then(doc => {
        console.log(doc.id)
        console.log(doc.data())
        let pastel = doc.data()
        pastel.id = doc.id
        commit('setPastel', pastel)
      })
    },
    createUser({commit, state}, user) {
        auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          console.log(res)
          const user = {
            email: res.user.email,
            uid: res.user.uid,
            password: res.user.password
          }
          db.collection(res.user.email).add({
            pastel: state.pastel
          }).then(() => {
            commit('setUser', user)
            router.push('/')
          }).catch(error => {
            console.log(error)
            commit('setError', error)
          }).catch(error => console.log(error))
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
  getters: {
    userExists(state) {
      if (state.user === null) {
        return false
      } else {
        return true
      }
    },
    filteredArray(state){
      let filteredSearch = []
      for ( let pastel of state.pasteles) {
        let name = pastel.name.toLowerCase();
        if(name.indexOf(state.text) >= 0) {
          filteredSearch.push(pastel)
        }
      }
      return filteredSearch
    }
  },
  modules: {}
});
