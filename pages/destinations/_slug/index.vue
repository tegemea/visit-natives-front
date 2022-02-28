<template>
  <div>
    <Destination :destination="destination" :destinations="destinations" />
  </div>
</template>

<script>
export default {
  async asyncData({ store, app, params }) {
    if(!store.state.destinations.length) {
      const { data } = await app.$axios.get(`${store.state.apiURL}/destinations`)
      store.commit('SET_DESTINATIONS', data)
      return { destination: data.find(d => d.slug === params.slug), destinations: data }
    }
  }
}
</script>