<template>
  <div>
    <div class="row">
      <div class="col-12 mb-3">
        <h1 class="d-flex justify-content-between align-items-center">
          <span class="flex-grow-1">
            <span class="text-black-50 small">{{ safari.days.length }} {{ safari.days.length > 1 ? 'Days' : 'Day' }}</span>
            <span class="cursive-fonts brand-color">{{ safari.name }}</span>
          </span>
          <span v-if="safari.price" class="thin-fonts brand-color">US$ {{ safariPrice(safari.price) }} pp</span>
        </h1>
        Activities - <span v-for="c in safari.categories" :key="c.id" class="text-black-50 mr-3 thin-fonts small">{{ c.name }}</span>
      </div>
      <div class="col-lg-8">
        <img :src="`${baseURL}/storage/tour_header_photos/${safari.header_photo}`" class="img-fluid mb-3" :alt="safari.name">
        <div class="row">
          <div class="col-12 mb-3 overview">
            <h3 class="title"><span class="title-content">Safari Overview</span></h3>
            <div class="mb-3 text-justify" v-html="safari.overview"></div>
          </div>
        </div>
        <div class="row day mb-3" v-for="(day, i) in safari.days" :key="day.id">
          <div class="col-12 day-container py-2">
            <h5 class="thin-fonts day-title"><span class="text-dark">Day {{ i+1 }}</span> --> {{ day.title }}</h5>
            <div class="text-justify" v-html="day.description"></div>
            <div class="row">
              <div v-if="day.photo1 && day.photo2" class="col-lg-6">
                <div class="row">
                  <div class="col-lg-6">
                    <img :src="`${baseURL}/storage/tour_day_photos/${day.photo1}`" class="img-fluid" :alt="day.title">
                  </div>
                  <div class="col-lg-6">
                    <img :src="`${baseURL}/storage/tour_day_photos/${day.photo1}`" class="img-fluid" :alt="day.title">
                  </div>
                </div>
              </div>
              <div v-else class="col-12">
                <img v-if="day.photo1" :src="`${baseURL}/storage/tour_day_photos/${day.photo1}`" class="img-fluid" :alt="day.title">
                <img v-if="day.photo2" :src="`${baseURL}/storage/tour_day_photos/${day.photo2}`" class="img-fluid" :alt="day.title">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="sticky">
          <div class="card mini-booking mb-3">
            <h3 class="card-header thin-fonts text-black-50 text-center">Enquire for this Adventure</h3>
            <div class="card-body">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><fai :icon="['fas','user']"></fai></span>
                </div>
                <input type="text" id="name" placeholder="Enter your full name" class="form-control">
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><fai :icon="['fas','envelope']"></fai></span>
                </div>
                <input type="email" id="email" placeholder="Your email address" class="form-control">
              </div>
              <div class="form-group">
                <textarea name="message" id="message" cols="30" rows="4" placeholder="Your quick message" class="form-control"></textarea>
              </div>
              <div class="form-group">
                <label>
                  <input type="checkbox" v-model="guest.agree" name="agree" id="agree"> 
                    Agree with <NuxtLink to="#" title="Terms of Service">Terms of Service</NuxtLink> <br>
                    <span class="ml-3 small text-black-50">Must agree to activate sending button below</span>
                </label>
              </div>
              <button class="btn btn-lg btn-danger w-100" :disabled="!guest.agree">
                <fai :icon="['fas','paper-plane']" class="mr-3"></fai>Send Enquiry
              </button>
            </div>
          </div>
          <div>
            <img :src="`${baseURL}/storage/tour_feature_photos/${safari.feature_photo}`" class="img-fluid rounded" :alt="safari.name">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      guest: {
        name:'', email:'', message: '', agree: false
      }
    }
  },
  props: {
    safaris : Array,
    safari: Object
  },
  computed: {
    ...mapState(['baseURL']),
  },
  mounted() {
    // 
  },
  methods: {
    safariPrice(n) {
      return new Intl.NumberFormat({
        style: 'currency',
        currency: 'USD'
      }).format(n)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main';

.overview {

  .title {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0; top: 50%;
      width: 100%; height: 1px;
      background: linear-gradient(to right, #fff, #ccc, #999);
      z-index: -1;
    }

    .title-content {
      padding: 0 30px 0 0;
      background: #fff;
      color: #999;
    }
  }
}

.day {
  
  .day-container {

    .day-title {
      border-left: 4px solid $brand-color;
      padding-left: 15px;
      color: #777;
    }
  }
}

.sticky {
  position: sticky;
  top: 140px;
}
</style>