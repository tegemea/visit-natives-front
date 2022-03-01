<template>
  <div class="row menu">
    <div class="logo-container">
      logo..
    </div>
    <div class="items">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/adventures">Adventures</NuxtLink>
      <NuxtLink to="/destinations">Safari Destinations</NuxtLink>
      <NuxtLink to="/contacts">Contacts</NuxtLink>
    </div>
    <div class="social">
      social links
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['pages', 'tours', 'tourCategories', 'destinationCategories', 'destinations', 'tours'])
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
</style>