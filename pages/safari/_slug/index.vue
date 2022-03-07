<template>
  <div class="container">
    <Safari :safaris="safaris" :safari="safari" />
  </div>
</template>

<script>
export default {
  async asyncData({ store, app, params }) {
    if(!store.state.tours.length) {
      const { data } = await app.$axios.get(`${store.state.apiURL}/tours`)
      store.commit('SET_TOURS', data);
      return { safaris: data, safari: data.find(s => s.slug === params.slug) }
    } else {
      let data = store.state.tours;
      return { 
        safari: data.find(s => s.slug === params.slug),
        safaris: store.state.tours
      }
    }
  },
  head() {
    return {
      title: this.safari.seo_title ? this.safari.seo_title : this.safari.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.safari.meta_description ? this.safari.meta_description : ''
        }
      ]
    }
  }
}
</script>