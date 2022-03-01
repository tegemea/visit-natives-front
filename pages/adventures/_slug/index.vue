<template>
  <div>
    <TourCategory :tourCategory="tourCategory" :tourCategories="tourCategories" />
  </div>
</template>

<script>
export default {
  async asyncData({ store, app, params }) {
    if(!store.state.tourCategories.length) {
      const { data } = await app.$axios.get(`${store.state.apiURL}/tour-categories`)
      store.commit('SET_DESTINATION_CATEGORIES', data)
      return { tourCategories: data, tourCategory: data.find(c => c.slug === params.slug) }
    } else {
      let data = store.state.tourCategories
      return { 
        tourCategory: data.find(c => c.slug === params.slug),
        tourCategories: store.state.tourCategories 
      }
    }
  },
  head() {
    return {
      title: this.tourCategory.seo_title ? this.tourCategory.seo_title : this.tourCategory.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.tourCategory.meta_description ? this.tourCategory.meta_description : ''
        }
      ]
    }
  }
}
</script>