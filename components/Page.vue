<template>
  <div class="row">
    <div class="col-lg-8 text-justify">
      <h1 class="title cursive-fonts brand-color">
        <fai :icon="['fas','drum']" class="mr-3 small"></fai> {{ page.name }}
      </h1><hr>
      <div v-html="page.description"></div>
    </div>
    
    <div class="col-lg-4">
      <div class="sticky-side">
        <img :src="`${baseURL}/storage/page_photos/${page.photo}`" class="img-fluid mb-5" :alt="page.name">
        <div class="list-group list-group-flush">
          <h2 class="list-group-item thin-fonts text-uppercase">Other Pages</h2>
          <NuxtLink v-for="sp in pages" 
            class="list-group-item list-group-item-action" 
            :to="`/about/${sp.slug}`" 
            :key="sp.id">
            <fai :icon="['fas','angle-right']" class="mr-3"></fai>{{ sp.name }}
          </NuxtLink>
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
@import '@/assets/scss/main';

.sticky-side {
  position: sticky;
  top: 140px;
}
</style>