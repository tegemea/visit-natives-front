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
    } else {
      let data = store.state.destinations
      return {
        destination: data.find(d => d.slug === params.slug),
        destinations: data
      }
    }
  },
  head() {
    return {
      title: this.destination.seo_title ? this.destination.seo_title : this.destination.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.destination.meta_description ? this.destination.meta_description : ''
        }
      ]
    }
  }
}
</script>