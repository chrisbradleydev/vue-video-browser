<template>
  <div>
    <input type="text" @input="onInput" placeholder="Enter search term...">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  computed: {
    apiKey() {
      return process.env.VUE_APP_YOUTUBE_API_KEY
    },
  },
  methods: {
    onInput(e) {
      this.$store.dispatch('searchYoutube', {
        apiKey: this.apiKey,
        searchTerm: e.target.value,
      })
    },
  },
}
</script>

<style scoped>
input {
  width: 75%;
}
div {
  text-align: center;
  margin: 20px;
}
</style>
