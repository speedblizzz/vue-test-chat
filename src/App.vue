<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    const path = localStorage.getItem('testChatPath')
    if (path) {
      localStorage.removeItem('testChatPath')
      this.$router.push(path)
    }
  }
}
</script>
