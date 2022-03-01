<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 text-justify" v-html="page.description"></div>
      <div class="col-lg-4">
        <div class="sticky-side">
          <img :src="`${baseURL}/storage/page_photos/${page.photo}`" class="img-fluid mb-5" :alt="page.name">
          <div class="list-group list-group-flush">
            <h2 class="list-group-item">Other Pages</h2>
            <NuxtLink v-for="sp in pages" 
              class="list-group-item list-group-item-action" 
              :to="`/about/${sp.slug}`" 
              :key="sp.id">
              {{ sp.name }}
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
  props: {
    page: Object,
    pages: Array
  },
  computed: {
    ...mapState(['baseURL'])
  }
}
</script>

<style lang="scss" scoped>
.sticky-side {
  position: sticky;
  top: 80px;
}
</style>