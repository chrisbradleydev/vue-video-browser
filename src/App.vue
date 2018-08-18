<template>
  <div class="container">
    <h1>{{ appTitle }}</h1>
    <SearchBar/>
    <div class="row">
      <VideoDetail :video="selectedVideo"/>
      <VideoList :videos="videos"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
  computed: {
    appTitle() {
      return process.env.VUE_APP_TITLE
    },
    ...mapGetters({
      videos: 'videos',
      selectedVideo: 'selectedVideo',
    }),
  },
}
</script>

<style scoped>
h1 {
  margin-top: 20px;
  text-align: center;
}
</style>
