<template>
  <footer>
    <div class="container border pt-3">
      <div class="row footer">
        <div class="col-4">
          <h4 class="thin-fonts">About us <span class="text-black-50 small">[ Visit Natives Worldwide ]</span></h4>
          <NuxtLink v-for="fPage in pages" :to="`/about/${fPage.slug}`" 
            class="d-block brand-color mb-2" :key="fPage.id">
            <fai :icon="['fas','angle-right']" class="mr-2"></fai>{{ fPage.name }}
          </NuxtLink>
        </div>
        <div class="col-4">
          <h4 class="thin-fonts">Tanzania Safari Adventures</h4>
          <NuxtLink v-for="fCategory in tourCategories" :to="`/adventures/${fCategory.slug}`" 
            class="d-block brand-color mb-1" :key="fCategory.id">
            <fai :icon="['fas','angle-right']" class="mr-2"></fai>{{ fCategory.name }}
          </NuxtLink>
        </div>
        <div class="col-4">
          <h4 class="thin-fonts">Get in Touch | Contact us</h4>
          <address>
            <strong>Visit Natives Worldwide Ltd.</strong> <br>
            <p>
              Arusha, United Republic <br>
              P. O. Box 1234 Arusha, TZ <br>
              Tel: <a class="brand-color" href="tel:+255745015555">+255745015555</a> <br>
              Email: <a class="brand-color" href="mailto:hello@visitnatives.co.tz">hello@visitnatives.co.tz</a> <br>
            </p>
          </address>
        </div>
      </div>
      <div class="row bottom-bar small text-center text-lg-left">
        <div class="col-lg-8">
          &copy; {{ new Date().getFullYear() }} Visit Natives Worldwide. All Rights Reserved
        </div>
        <div class="col-lg-4 text-center text-lg-right">
          Developed by 
          <a href="https://luso.solutions" class="brand-color thin-fonts" target="_blank" title="LUSO Solutions">LUSO Solutions</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['baseURL', 'pages', 'tours', 'tourCategories', 'destinationCategories', 'destinations'])
  },
  mounted() {
    if(!this.pages.length) this.getPages();
    if(!this.tours.length) this.getTours();
    if(!this.tourCategories.length) this.getTourCategories();
    if(!this.destinationCategories) this.getDestinationCategories();
    if(!this.destinations.length) this.getDestinations();
  },
  methods: {
    ...mapActions([
      'getPages', 'getTours', 'getTourCategories', 
      'getDestinationCategories', 'getDestinations'
    ])
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 10px 0;
}
.bottom-bar {
  background: #eee;
  padding: 10px 0;
}
</style>