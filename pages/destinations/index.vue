<template>
  <div class="container">
    <div v-for="d in destinations" class="row mb-4" :key="d.id">
      <div class="col-lg-6">
        <h2 class="title">
          <NuxtLink :to="`/destinations/${d.slug}`" class="title-link">
            <fai :icon="['fas','map-marker-alt']" class="small mr-3"></fai>{{ d.name }}
          </NuxtLink>
          <a :href="`/destinations/${d.slug}`" class="btn btn-sm btn-outline-danger thin-fonts rounded-0 float-right">Read More</a>
        </h2> <hr>
        <div class="text-justify" v-html="d.description.length > 400 ? d.description.substr(0, 400)+'...' : d.description"></div>
      </div>
      <div class="col-lg-6">
        <NuxtLink :to="`/destinations/${d.slug}`">
          <img :src="`${baseURL}/storage/destination_photos/${d.photo}`" class="img-fluid" :alt="d.name">
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async asyncData({ store, app }) {
    if(!store.state.destinations.length) {
      const { data } = await app.$axios.get(`${store.state.apiURL}/destinations`)
      store.commit('SET_DESTINATIONS', data)
      return { destinations: data }
    } else {
      return { destinations: store.state.destinations }
    }
  },
  computed: {
    ...mapState(['baseURL'])
  },
  head() {
    return {
      title: "Safari Destinations",
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