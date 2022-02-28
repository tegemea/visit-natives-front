<template>
  <div>
    {{ tourCategories }}
  </div>
</template>

<script>
export default {
  async asyncData({ store, app }) {
    if(!store.state.tourCategories.length) {
      const { data } = await app.$axios.get(`${store.state.apiURL}/tour-categories`)
      store.commit('SET_DESTINATION_CATEGORIES', data)
      return { tourCategories: data }
    } else {
      return { tourCategories: store.state.tourCategories }
    }
  },
  head() {
    return {
      title: 'Safari Adventures',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  }
}
</script>