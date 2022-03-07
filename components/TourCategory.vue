<template>
  <div class="row">
    <div class="col-lg-8">
      <h1 class="cursive-fonts brand-color">
        <fai :icon="['fas','paw']" class="mr-3"></fai>{{ tourCategory.name }}
      </h1><hr>
      <div class="text-justify" v-html="tourCategory.description"></div>
      <div v-if="tourCategory.tours.length" class="row mt-4">
        <div class="col-12 mb-3 text-black-50"><h4>Crafted Safari Itineraries to {{ tourCategory.name }}</h4></div>
        <div v-for="tour in tourCategory.tours" class="col-lg-6 mb-4" :key="tour.id">
          <div class="card">
            <div class="card-body p-0">
              <NuxtLink :to="`/safari/${tour.slug}`" :title="tour.name">
                <img :src="`${baseURL}/storage/tour_feature_photos/${tour.feature_photo}`" class="img-fluid" :alt="tour.name">
              </NuxtLink>
            </div>
            <div class="card-footer">
              <NuxtLink :to="`/safari/${tour.slug}`" class="thin-fonts text-black-50">
                <fai :icon="['fas','angle-right']" class="mr-3"></fai>{{ tour.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="sticky">
        <img :src="`${baseURL}/storage/tour_category_photos/${tourCategory.photo}`" class="img-fluid mb-5" :alt="tourCategory.name">
        <div class="list-group list-group-flush">
          <h3 class="list-group-item text-uppercase thin-fonts">Safari Adventures</h3>
          <NuxtLink v-for="c in tourCategories" 
            class="list-group-item list-group-item-action" 
            :to="`/adventures/${c.slug}`" 
            :key="c.id">
            <fai :icon="['fas','angle-right']" class="mr-3"></fai>{{ c.name }}
            <div v-if="c.tours.length" class="badge badge-secondary badge-pill float-right">{{ c.tours.length }}</div>
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

<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: 140px;
}
</style>