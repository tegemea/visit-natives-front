<template>
  <div class="container">
    <div class="row">
      <div v-for="p in pages" class="col-12 mb-4" :key="p.id">
        <div class="row">
          <div class="col-lg-6 text-justify">
            <h2 class="title">
              <NuxtLink :to="`/about/${p.slug}`" class="title-link" :title="p.name">
                <fai :icon="['fas','drum']" class="mr-3 small"></fai>{{ p.name }}
              </NuxtLink>
              <a :href="`/about/${p.slug}`" class="btn btn-sm btn-outline-danger thin-fonts float-right rounded-0">Read More</a>
            </h2> <hr>
            <div v-html="p.description.length > 800 ? p.description.substr(0, 800) + '...' : p.description"></div>
          </div>
          <div class="col-lg-6">
            <NuxtLink :to="`/about/${p.slug}`">
              <img :src="`${baseURL}/storage/page_photos/${p.photo}`" class="img-fluid" :alt="p.name">
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async asyncData({ store, app }) {
    if(!store.state.pages.length) {
      const { data } = await app.$axios.get(`${store.state.apiURL}/pages`)
      store.commit('SET_PAGES', data)
      return { pages: data }
    } else {
      return { pages:store.state.pages }
    }
  },
  computed: {
    ...mapState(['baseURL'])
  },
  head() {
    return {
      title: 'About Visit Natives Worldwide',
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