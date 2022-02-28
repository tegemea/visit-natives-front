<template>
  <div class="container-fluid">
    <Nuxt keep-alive />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['pages','tours','countries','tourCategories','destinationCategories', 'destinations'])
  },
  mounted(){
    if(!this.pages.length) this.getPages();
    if(!this.tours.length) this.getTours();
    if(!this.countries.length) this.getCountries();
    if(!this.tourCategories.length) this.getTourCategories();
    if(!this.destinationCategories.length) this.getDestinationCategories();
    if(!this.destinations.length) this.getDestinations();
  },
  methods: {
    ...mapActions(['getPages','getTours','getCountries','getTourCategories','getDestinationCategories','getDestinations'])
  }
}
</script>