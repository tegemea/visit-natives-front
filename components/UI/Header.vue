<template>
  <div class="container" ref="menuContainer">
    <div class="row menu">
      <div class="logo-container">
        <NuxtLink to="/"><img src="@/assets/images/logo.jpg" alt="Visit Natives Worldwide" class="logo"></NuxtLink>
      </div>
      <div class="items">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About Us</NuxtLink>
        <NuxtLink to="/adventures">Safari Adventures</NuxtLink>
        <NuxtLink to="/destinations">Safari Destinations</NuxtLink>
        <NuxtLink to="/contacts">Contact Us</NuxtLink>
      </div>
      <div class="social">
        <a href="https://www.facebook.com/VisitNativesLtd/" target="_blank"><fai :icon="['fab','facebook']" class="fa-2x"></fai></a>
        <a href="https://twitter.com/ltdvisit" target="_blank"><fai :icon="['fab','twitter']" class="fa-2x"></fai></a>
        <a href="#" target="_blank"><fai :icon="['fab','instagram']" class="fa-2x"></fai></a>
        <!-- <a href="#"><fai :icon="['fab','skype']" class="fa-2x"></fai></a> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['pages', 'tours', 'tourCategories', 'destinationCategories', 'destinations', 'tours'])
  },
  mounted() {
    this.$onscroll(this.$refs.menuContainer)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main';

.container {
    position: fixed;
    left: 50%; top: 0;
    transform: translateX(-50%);
    z-index: 3;
    line-height: 70px;
    background: white;
    border: 1px solid #ccc;
    border-top: none;
    transition: all .3s ease;

    &.scrolled {
      border-color: #fff;
      box-shadow: 0 1px 6px 2px rgba(#333, .5) !important;
    }

  .menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    flex-wrap: nowrap;

    .logo-container {
      flex-basis: 200px;
      padding: 12px;

      .logo {
        max-width: 120px;
      }
    }
    
    .items {
      font-family: $thin-fonts;
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-content: center;

      a {
        display: inline-block;
        border: 1px solid #ccc;
        border-bottom: none;
        line-height: 40px;
        margin: 0 5px;
        padding: 0 15px;
        color: #888;
        position: relative;
        text-transform: uppercase;
        text-decoration: none;
        transition: all .1s ease;

        &::before {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          width: 100%;
          height: 2px;
          background: lighten($color: $brand-color, $amount: 15);
          z-index: -1;
          transition: all .1s ease;
        }

        &:hover {
          color: white;
          text-shadow: 0 1px 2px #000;
          border-color: lighten($color: $brand-color, $amount: 15);

          &::before {
            height: 100%;
          }
          
        }
      }
    }

    .social {
      flex-basis: 200px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding-top: 15px;

      a {
        color: lighten($color: $base-color, $amount: 50);
        transition: all .3s ease;

        &:hover {
          color: $brand-color;
        }
      }
    }
  }
}
</style>