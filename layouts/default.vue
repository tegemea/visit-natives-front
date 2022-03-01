<template>
  <div class="container-fluid">
    <UIHeader class="header" />
    <Nuxt keep-alive class="main" />
    <UIFooter class="footer" />
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

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0; z-index: 3;
  padding: 0 15px;
  line-height: 70px;
  background: white;
  border-bottom: 1px dashed #ccc;
}
.main {
  margin-top: 70px;
  padding: 15px 0;
}
.footer {
  // position: relative;
}
</style>