<template>
  <div>

    <!-- <div v-for="category in tourCategories" :key="category.id">
      <NuxtLink :to="`/adventures/${category.slug}`">{{ category.name }}</NuxtLink>
    </div> -->
    <div class="container">
      <div v-for="c in tourCategories" class="row mb-4" :key="c.id">
        <div class="col-12">
          <h2>
            <NuxtLink :to="`/adventures/${c.slug}`">{{ c.name }}</NuxtLink>
          </h2><hr>
        </div>
        <div class="col-lg-6">
          <div v-html="c.description.length > 300 ? c.description.substr(0, 300) + '...' : c.description"></div>
        </div>
        <div class="col-lg-6">
          <NuxtLink :to="`/adventures/${c.slug}`">
            <img :src="`${baseURL}/storage/tour_category_photos/${c.photo}`" class="img-fluid" :alt="c.name">
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
  computed: {
    ...mapState(['baseURL'])
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