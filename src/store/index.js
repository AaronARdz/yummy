import Vue from "vue";
import Vuex from "vuex";

import { auth, db } from "../firebase";
import router from "../router";

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
        quantity: 1,
        category: "",
        img: "pastelaleman.png",
        link: "https://www.instagram.com/ar/2748783252101879",
      },
      {
        id: 2,
        name: "Mostachón de fresa",
        quantity: 1,
        price: "$275.00",
        category: "",
        img: "mostachon.png",
        link: "https://www.instagram.com/ar/1574372392749414",
      },
      {
        id: 3,
        name: "Diplomático",
        quantity: 1,
        price: "$280.00",
        category: "",
        img: "diplomatico.png",
        link: "https://www.instagram.com/ar/1020019978517800",
      },
      {
        id: 4,
        name: "Pay Tortuga",
        quantity: 1,
        price: "$295.00",
        category: "",
        img: "paytortuga.png",
        link: "https://www.instagram.com/ar/371932794070630",
      },
      {
        id: 5,
        name: "Rollo Mango",
        quantity: 1,
        price: "$305.00",
        category: "",
        img: "rollomango.png",
        link: "https://www.instagram.com/ar/127420302239475",
      },
      {
        id: 6,
        name: "Pastel de chocolate",
        quantity: 1,
        price: "$275.00",
        category: "",
        img: "pastel1.png",
        link: "https://www.instagram.com/ar/695063864731618",
      },
      {
        id: 7,
        name: "Rebanada de chocolate",
        quantity: 1,
        price: "$50.00",
        category: "",
        img: "pastel2.png",
        link: "https://www.instagram.com/ar/1110124509420206",
      },
      {
        id: 8,
        name: "Rebanada de pastel",
        quantity: 1,
        price: "$50.00",
        category: "",
        img: "pastel3.png",
        link: "https://www.instagram.com/ar/127420302239475",
      },
      {
        id: 9,
        name: "Pastel de bodas",
        quantity: 1,
        price: "$450.00",
        category: "",
        img: "p-boda.png",
        link: "https://www.instagram.com/ar/127420302239475",
      }
    ],
    pastel: {
      id: "",
      name: "",
      quantity: 1,
      category: "",
      price: "",
      img: "",
      link: "",
    },
    shoppingCart: [],
    carrito: [],
    text: "",
    isSubmitted: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setCarrito(state, payload) {
      state.carrito = payload;
    },
    loadFirebase(state, payload) {
      state.loading = payload;
    },
    setPastel(state, payload) {
      state.pastel = payload;
    },
    setSubmitted(state, payload){
      state.isSubmitted = payload
    },
  },
  actions: {
    addOrder({commit, state}, order) {
      commit('loadFirebase', true);
      db.collection(state.user.email).doc("pasteles").collection("order").add({
        order: order
      })
          .then(() => {
            commit('loadFirebase', false);
            commit('setSubmitted', true);
          })
    },

    addContact({commit}, contact) {
      commit('loadFirebase', true);
        db.collection('contacto').add({
          contact: contact
        })
        .then(() => {
            commit('loadFirebase', false);
            commit('setSubmitted', true);
        })
    },
    finder({ state }, payload) {
      console.log(payload);
      state.text = payload.toLowerCase();
    },
    addPastel({commit, state},pastel) {
      commit('loadFirebase', true);
      state.pastel = pastel
      console.log(state.pastel)
      db.collection(state.user.email).doc("pasteles").collection("carrito").add({
        pastel : state.pastel
      })
      .then(doc => {
        commit('loadFirebase', false);
        console.log("added" + doc.id)
      })
    },
    deletePastel({state}, id) {
      db.collection(state.user.email).doc("pasteles").collection("carrito").doc(id).delete()
      .then(() => {
        console.log('deleted job')
        this.dispatch('getJobs')
      })
    },
    getPasteles({commit,state}) {
      commit('loadFirebase', true);
      const jobs = []
      console.log(state.user.email + 'email')
      db.collection(state.user.email).doc("pasteles").collection("carrito").get()
      .then(res => {
        res.forEach(doc => {
          let job = doc.data().pastel
          console.log(job)
          job.id = doc.id
          jobs.push(job)
        })
        commit('loadFirebase', false);
        commit('setCarrito', jobs)
      })
    },
    getCarrito({ commit, state }) {
      commit("loadFirebase", true);
      const pasteles = [];
      db.collection(state.user.email).doc("pasteles").collection("carrito")
        .get()
        .then(res => {
          res.forEach(doc => {
            let pastel = doc.data().pastel;
            pastel.id = doc.id;
            console.log("data" + pastel);
            pasteles.push(pastel);
          });
          setTimeout(() => {
            commit("loadFirebase", false);
          }, 2000);
          commit("setCarrito", pasteles);
        });
    },
    getPastel({ commit, state }, pastelId) {
      db.collection(state.user.email).doc("pasteles").collection("carrito")
        .doc(pastelId)
        .get()
        .then(doc => {
          console.log(doc.id);
          console.log(doc.data());
          let pastel = doc.data();
          pastel.id = doc.id;
          commit("setPastel", pastel);
        });
    },
    createUser({ commit }, user) {
      auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          console.log(res);
          const user = {
            email: res.user.email,
            uid: res.user.uid,
            password: res.user.password
          };
          commit("setUser", user);
          router.push("/");
        })
        .catch(error => {
          console.log(error);
          commit("setError", error);
        });
    },
    userLogin({ commit }, user) {
      auth.signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          console.log(res);
          const usuario = {
            email: res.user.email,
            uid: res.user.uid
          };
          commit("setUser", usuario);
          router.push("/auth");
        })
        .catch(error => {
          console.log(error);
          commit("setError", error);
        });
    },
    detectUser({ commit }, user) {
      commit("setUser", user);
    },
    logout() {
      auth.signOut();
      router.push("/Login");
    }
  },
  getters: {
    userExists(state) {
      if (state.user === null) {
        return false;
      } else {
        return true;
      }
    },
    filteredArray(state) {
      let filteredSearch = [];
      for (let pastel of state.pasteles) {
        let name = pastel.name.toLowerCase();
        if (name.indexOf(state.text) >= 0) {
          filteredSearch.push(pastel);
        }
      }
      return filteredSearch;
    },
    carritoArray(state) {
      let filteredSearch = [];
      for (let pastel of state.carrito) {
        let name = pastel.name.toLowerCase();
        if (name.indexOf(state.text) >= 0) {
          filteredSearch.push(pastel);
        }
      }
      return filteredSearch;
    }
  },
  modules: {}
});
