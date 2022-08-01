import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    Testimonials: [{
        name: "Joshe_Theys",
        position: "colleague",
        desc: 'i am a poopy monster that likes to eat poopy goobers',
      },
      {
        name: "Charles Thomas",
        position: "colleague",
        desc: 'i am a poopy monster that likes to eat poopy goobers',
      },

    ],
    About: {
      me: "Mikhail"
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})