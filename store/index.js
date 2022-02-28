export const state = () => ({
  apiURL: "http://localhost:8000/api/v1",
  baseURL: "http://localhost:8000",

  pages: [],
  tours: [],
  tourCategories: [],
  destinationCategories: [],
  destinations: [],
  countries: []
})

export const getters = {
  apiURL(state) { return state.apiURL },
  baseURL(state) { return state.baseURL },
  pages(state) { return state.pages },
  tours(state) { return state.tours },
  tourCategories(state) { return state.tourCategories },
  destinationCategories(state) { return state.destinationCategories },
  destinations(state) { return state.destinations },
  countries(state) { return state.countries }
}

export const mutations = {
  SET_PAGES: (state, pages) => { state.pages = pages },
  SET_TOURS: (state, tours) => { state.tours = tours },
  SET_TOUR_CATEGORIES: (state,tourCategories) => { state.tourCategories = tourCategories },
  SET_DESTINATION_CATEGORIES: (state, destinationCategories) => { state.destinationCategories = destinationCategories },
  SET_DESTINATIONS: (state, destinations) => { state.destinations = destinations },
  SET_COUNTRIES: (state, countries) => { state.countries = countries }
}

export const actions = {
  async getPages({ state, commit }) {
    const data = await this.$axios.$get(`${state.apiURL}/pages`)
    if(data) commit('SET_PAGES', data)
  },
  async getTours({ state, commit }) {
    const data = await this.$axios.$get(`${state.apiURL}/tours`)
    if(data) commit('SET_TOURS', data)
  },
  async getTourCategories({ state, commit }) {
    const data = await this.$axios.$get(`${state.apiURL}/tour-categories`)
    if(data) commit('SET_TOUR_CATEGORIES', data)
  },
  async getDestinationCategories({ state, commit }) {
    console.log('here...')
    const data = await this.$axios.$get(`${state.apiURL}/destination-categories`)
    console.log('destination categories', data)
    if(data) commit('SET_DESTINATION_CATEGORIES', data)
  },
  async getDestinations({ state, commit }) {
    const data = await this.$axios.$get(`${state.apiURL}/destinations`)
    if(data) commit('SET_DESTINATIONS', data)
  },
  async getCountries({ state, commit }) {
    const data = await this.$axios.$get(`${state.apiURL}/countries`)
    if(data) commit('SET_COUNTRIES', data)
  }
}