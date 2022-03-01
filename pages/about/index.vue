<template>
  <div class="container">
    <div class="row">
      <!-- <div v-for="page in pages" :key="page.id">
        <NuxtLink :to="`/about/${page.slug}`">{{ page.name }}</NuxtLink>
      </div> -->
      <div v-for="p in pages" class="col-12 mb-4" :key="p.id">
        <div class="row">
          <div class="col-12">
            <h3>
              <NuxtLink :to="`/about/${p.slug}`">{{ p.name }}</NuxtLink>
            </h3> <hr>
          </div>
          <div class="col-lg-6 text-justify">
            <div v-html="p.description.length > 500 ? p.description.substr(0, 500) + '...' : p.description"></div>
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