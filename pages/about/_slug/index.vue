<template>
  <div>
    <Page :page="page" :pages="pages" />
  </div>
</template>

<script>
export default {
  async asyncData({ store, app, params }) {
    if(!store.state.pages.length) {
      console.log('axios')
      const { data } = await app.$axios.get(`${store.state.apiURL}/pages`)
      if(data) store.commit('SET_PAGES', data)
      return {
        page: data.find(p => p.slug === params.slug),
        pages: data
      }
    } else {
      let data = store.state.pages
      return {
        page: data.find(p => p.slug === params.slug),
        pages: store.state.pages
      }
    }
  },
  head() {
    return {
      title: this.pages.seo_title ? this.pages.seo_title : this.pages.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.pages.meta_description ? this.pages.meta_description : ''
        }
      ]
    }
  }
}
</script>