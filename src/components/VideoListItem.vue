<template>
  <li class="list-group-item media" @click="onVideoSelect">
    <img class="mr-3" :src="thumbnailUrl"/>
    <div class="media-body">
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    video: {
      data() {
        return {}
      },
    },
  },
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url
    },
  },
  methods: {
    onVideoSelect() {
      this.$store.dispatch('selectedVideo', {
        video: this.video,
      })
    },
  },
}
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}
li:hover {
  background-color: #eee;
}
</style>
