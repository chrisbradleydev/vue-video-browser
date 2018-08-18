import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as types from './types'

Vue.use(Vuex)

const state = {
  videos: [],
}

const getters = {
  videos: state => state.videos,
}

const mutations = {
  [types.SEARCH_VIDEOS](state, { videos }) {
    state.videos = videos
  },
}

const actions = {
  searchYoutube({ commit }, payload) {
    axios
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: payload.apiKey,
          type: 'video',
          part: 'snippet',
          q: payload.searchTerm,
        },
      })
      .then(resp => {
        commit(types.SEARCH_VIDEOS, {
          videos: resp.data.items,
        })
      })
  },
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state,
  getters,
  mutations,
  actions,
})
