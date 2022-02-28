<template>
  <div>
    About page...
    {{ pages }}
  </div>
</template>

<script>
export default {
  async asyncData({ store, app }) {
    if(!store.state.pages.length) {
      const { data } = await app.$axios.get(`${store.state.apiURL}/pages`)
      store.commit('SET_PAGES', data)
      return { pages: data }
    } else {
      return { pages:store.state.pages }
    }
  }
}
</script>