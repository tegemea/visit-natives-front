<template>
  <div class="container">
    <div v-for="c in tourCategories" class="row mb-4" :key="c.id">
      <div class="col-lg-6">
        <h2 class="title">
          <NuxtLink :to="`/adventures/${c.slug}`" class="title-link" :title="c.name">
            <fai :icon="['fas','paw']" class="mr-3 small"></fai>{{ c.name }}
          </NuxtLink>
          <a :href="`/adventures/${c.slug}`" class="btn btn-sm btn-outline-danger thin-fonts rounded-0 float-right">
            {{ c.tours.length ? (c.tours.length > 1 ? 'View ' + c.tours.length + ' Tours' : 'View ' + c.tours.length + ' Tour' ) : 'More Details' }}
          </a>
        </h2><hr>
        <div v-html="c.description.length > 500 ? c.description.substr(0, 500) + '...' : c.description" class="text-justify"></div>
      </div>
      <div class="col-lg-6">
        <NuxtLink :to="`/adventures/${c.slug}`">
          <img :src="`${baseURL}/storage/tour_category_photos/${c.photo}`" class="img-fluid" :alt="c.name">
        </NuxtLink>
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

<style lang="scss" scoped>
@import '@/assets/scss/main';

.title {
  font-family: $cursive-fonts;

  a.title-link {
    color: lighten($base-color, 30);
    text-decoration: none;

    &:hover {
      color: $brand-color;
    }
  }
}
</style>