<template>
  <div class="container">
    <h1>{{ appTitle }}</h1>
    <SearchBar @termChange="onTermChange"/>
    <div class="row">
      <VideoDetail :video="selectedVideo"/>
      <VideoList @videoSelect="onVideoSelect" :videos="videos"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  data() {
    return {
      videos: [],
      selectedVideo: null,
    }
  },
  computed: {
    appTitle() {
      return process.env.VUE_APP_TITLE
    },
    apiKey() {
      return process.env.VUE_APP_YOUTUBE_API_KEY
    },
  },
  methods: {
    onTermChange(searchTerm) {
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: this.apiKey,
            type: 'video',
            part: 'snippet',
            q: searchTerm,
          },
        })
        .then(resp => {
          this.videos = resp.data.items
        })
    },
    onVideoSelect(video) {
      this.selectedVideo = video
    },
  },
}
</script>

<style scoped>
h1 {
  margin-top: 20px;
  text-align: center;
}
</style>
