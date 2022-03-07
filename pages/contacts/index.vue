<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center cursive-fonts text-black-50 border py-3 mb-4">Book your Safari with us, Visit Natives with us..!</h2>
      </div>
      <div class="col-lg-7">
        <form id="bookingForm" ref="bookingForm">
          <div class="card rounded-0">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6 form-group">
                  <label for="name">Enter your Full Name</label>
                  <input type="text" v-model="guest.name" id="name" class="form-control rounded-0">
                </div>
                <div class="col-lg-6 form-group">
                  <label for="email">Enter your Email</label>
                  <input type="email" v-model="guest.email" id="email" class="form-control rounded-0">
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 form-group">
                  <label for="nationality">Enter your Nationality</label> <small class="text-black-50">( optional )</small>
                  <input type="text" v-model="guest.nationality" id="nationality" class="form-control rounded-0">
                </div>
                <div class="col-lg-6 form-group">
                  <label for="phone">Enter your Phone</label> <small class="text-black-50">( optional )</small>
                  <input type="phone" v-model="guest.phone" id="phone" class="form-control rounded-0">
                </div>
              </div>
              <div class="form-group">
                <label for="adventure_id">Select your Adventure of Choice</label>
                <select name="adventure_id" v-model="guest.adventure" id="adventure_id" class="form-control rounded-0">
                  <option value="" selected disabled>--- Select your Adventure ---</option>
                  <option v-for="adventure in tours" :value="adventure.id" :key="adventure.id">{{ adventure.name }}</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Enter your message</label>
                <textarea name="message" v-model="guest.message" id="message" cols="30" rows="4" class="form-control rounded-0"></textarea>
              </div>
            </div>
            <div class="card-footer d-flex">
              <button class="btn btn-danger rounded-0 flex-grow-1 mr-3 text-uppercase">Send your Booking</button>
              <button class="btn btn-outline-secondary rounded-0" @click.prevent="clearForm">Clear</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15931.450265542257!2d36.71329172247019!3d-3.383734590211257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stz!4v1646143366544!5m2!1sen!2stz" width="100%" height="520" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guest: {
        name:'', email:'', nationality:'', phone:'', adventure:'', message:''
      }
    }
  },
  async asyncData({ store, app }) {
    if(!store.state.tours.length) {
      const data = await app.$axios.$get(`${store.state.apiURL}/tours`)
      console.log('axios : ', data); return { tours: data }
    } else {
      console.log('store : ', store.state.tours)
      return { tours: store.state.tours }
    }
  },
  methods: {
    clearForm() {
      this.guest.name = ''; this.guest.email = ''; this.guest.nationality = ''; this.guest.phone = '';
      this.guest.message = ''; this.guest.adventure = ''; document.querySelector('#bookingForm').reset();
    }
  }
}
</script>