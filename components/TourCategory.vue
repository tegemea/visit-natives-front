<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8" v-html="tourCategory.description"></div>
      <div class="col-lg-4">
        <img :src="`${baseURL}/storage/tour_category_photos/${tourCategory.photo}`" class="img-fluid mb-5" :alt="tourCategory.name">
        <div class="list-group list-group-flush">
          <NuxtLink v-for="c in tourCategories" 
            class="list-group-item list-group-item-action" 
            :to="`/adventures/${c.slug}`" 
            :key="c.id">
            {{ c.name }}
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
    tourCategories: Array,
    tourCategory: Object
  },
  computed: { ...mapState(['baseURL']) }
}
</script>