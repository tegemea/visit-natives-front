<template>
  <div>
    {{ destinations }}
  </div>
</template>

<script>
export default {
  async asyncData({ store, app }) {
    if(!store.state.destinations.length) {
      const { data } = await app.$axios.get(`${store.state.apiURL}/destinations`)
      store.commit('SET_DESTINATIONS', data)
      return { destinations: data }
    } else {
      return { destinations: store.state.destinations }
    }
  }
}
</script>