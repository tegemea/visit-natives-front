<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <img src="/images/maasai-culture.jpg" class="img-fluid" alt="">
      </div>
    </div>

    <!-- Company Pages -->
    <div class="row mb-5">
      <div class="col-12">
        <h1 class="cursive-fonts text-center brand-color py-4">Welcome to Visit Natives Wordwide, Arusha Tanzania</h1>
        <div class="text-justify mb-4">
          The indigenous people manage 80% of the Earth’s biodiversity, but they only occupy 22% of the planet’s surface. The indigenous communities play a crucial role in protecting our planet. For example, the Hadzabe only gather wild honey during periods of the rainy season so that bees are able to store a surplus. They never take more than nature can give for them. They are custodians of their ancestral lands and they have indigenous knowledge that respects nature in all aspects. We bring these same values on our trips.
        </div>
      </div>
      <div v-for="page in pages" class="col-lg-4" :key="page.id">
        <div class="card custom-card rounded-0">
          <div class="card-body p-0">
            <img :src="`${baseURL}/storage/page_photos/${page.photo}`" class="img-fluid" :alt="page.name">
            <nuxt-link :to="`/about/${page.slug}`"><span class="item-name">{{ page.name }}</span></nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Safari Destinations -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="h3 section-title">
          <span class="title-body">Tanzania Safari Destinations</span>
        </div>
      </div>
      <div class="col-12">
        <div class="row mb-4">
          <div v-if="firstDestination" class="col-lg-4">
            <h4 class="cursive-fonts">
              <NuxtLink :to="`/destinations/${firstDestination.slug}`" class="brand-color">{{ firstDestination.name }}</NuxtLink>
            </h4>
            <div v-html="`${firstDestination.description.substr(0, 400)}...`" class="text-justify"></div>
            <NuxtLink :to="`/destinations/${firstDestination.slug}`" class="btn btn-sm btn-outline-danger rounded-0 mt-3">
              Read More
            </NuxtLink>
          </div>
          <div v-if="firstDestination" class="col-lg-8">
            <img :src="`${baseURL}/storage/destination_photos/${firstDestination.photo}`" class="img-fluid" :alt="firstDestination.name">
          </div>
        </div>
      </div>
      <div v-for="destination in destinations.slice(1,4)" class="col-lg-4 mb-3" :key="destination.id">
        <div class="card custom-card rounded-0">
          <div class="card-body p-0">
            <NuxtLink :to="`/destinations/${destination.slug}`">
              <img :src="`${baseURL}/storage/destination_photos/${destination.photo}`" class="img-fluid" :alt="destination.name">
              <span class="item-name">{{ destination.name }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Tour Categories -->
    <div class="row">
      <div class="col-12">
        <div class="h3 section-title">
          <span class="title-body">Tanzania Safari Adventures</span>
        </div>
      </div>
      <div class="col-12">
        <div class="row mb-4">
          <div v-if="richTourCategory" class="col-lg-4">
            <h4 class="cursive-fonts">
              <NuxtLink :to="`/adventures/${richTourCategory.slug}`" class="brand-color">{{ richTourCategory.name }}</NuxtLink>
            </h4>
            <div v-html="`${richTourCategory.description.substr(0, 400)}...`" class="text-justify"></div>
            <NuxtLink :to="`/adventures/${richTourCategory.slug}`" class="btn btn-sm btn-outline-danger rounded-0 mt-3">Read More</NuxtLink>
          </div>
          <div v-if="richTourCategory" class="col-lg-8">
            <img :src="`${baseURL}/storage/tour_category_photos/${richTourCategory.photo}`" class="img-fluid" :alt="richTourCategory.name">
          </div>
        </div>
      </div>
      <div v-for="category in tourCategories.slice(1,4)" class="col-lg-4 mb-3" :key="category.id">
        <div class="card custom-card rounded-0">
          <div class="card-body p-0">
            <NuxtLink :to="`/adventures/${category.slug}`">
              <img :src="`${baseURL}/storage/tour_category_photos/${category.photo}`" class="img-fluid" :alt="category.name">
              <span class="item-name">{{ category.name }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['baseURL', 'pages', 'tours', 'tourCategories', 'destinationCategories', 'destinations']),
    firstDestination() { return this.destinations[0] }, richTourCategory() { return this.tourCategories.find(c => c.tours.length > 2) }
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
@import '~/assets/scss/main';

.section-title {
  position: relative;
  margin-bottom: 15px;
  color: #999;

  .title-body {
    padding: 0 30px 0 0;
    background: white;
  }

  &::before {
    content: '';
    position: absolute;
    top: 60%; left: 0;
    width: 100%; height: 1px;
    background: #999;
    z-index: -1;
  }
}

.custom-card {
  .card-body {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 100%; width: 100%;
      background: linear-gradient(to bottom, transparent, transparent, #000);
    }

    .item-name {
      position: absolute;
      bottom: 10px; left: 15px;
      color: white;
      font-family: $cursive-fonts;
      font-size: 2vw;
      text-shadow: 0 1px 3px #000;
    }
  }
}
</style>
