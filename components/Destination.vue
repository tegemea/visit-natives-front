<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 text-justify">
        <h2>{{ destination.name }}</h2><hr>
        <div v-html="destination.description"></div>
      </div>
      <div class="col-lg-4">
        <img :src="`${baseURL}/storage/destination_photos/${destination.photo}`" class="img-fluid mb-5" :alt="destination.name">
        <div class="list-group list-group-flush">
          <NuxtLink v-for="d in destinations" 
            class="list-group-item list-group-item-action" 
            :to="`/destinations/${d.slug}`" 
            :key="d.id">
            {{ d.name }}
          </NuxtLink>
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