<template>
  <div>
    <input type="text" @input="onInput" placeholder="Enter search term...">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput(e) {
      this.$emit('termChange', e.target.value)
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
