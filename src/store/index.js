import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as types from './types'

Vue.use(Vuex)

const state = {
  videos: [],
  selectedVideo: {},
}

const getters = {
  videos: state => state.videos,
  selectedVideo: state => state.selectedVideo,
}

const mutations = {
  [types.SEARCH_VIDEOS](state, { videos }) {
    state.videos = videos
  },
  [types.SELECTED_VIDEO](state, { video }) {
    state.selectedVideo = video
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
  selectedVideo({ commit }, payload) {
    commit(types.SELECTED_VIDEO, {
      video: payload.video,
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
