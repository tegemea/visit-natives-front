<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 text-justify">
        <h1 class="title brand-color">
          <fai :icon="['fas','map-marker-alt']" class="small mr-3"></fai>{{ destination.name }}
        </h1><hr>
        <div v-html="destination.description"></div>
      </div>
      <div class="col-lg-4">
        <div class="sticky">
          <img :src="`${baseURL}/storage/destination_photos/${destination.photo}`" class="img-fluid mb-5" :alt="destination.name">
          <div class="list-group list-group-flush">
            <h3 class="thin-fonts list-group-item text-uppercase">Safari Destinations</h3>
            <NuxtLink v-for="d in destinations" 
              class="list-group-item list-group-item-action" 
              :to="`/destinations/${d.slug}`" 
              :key="d.id">
              <fai :icon="['fas','angle-right']" class="mr-3"></fai>{{ d.name }}
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
  props: ['destination', 'destinations'],
  computed: { ...mapState(['baseURL']) }
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

.sticky {
  position: sticky;
  top: 140px;
}
</style>