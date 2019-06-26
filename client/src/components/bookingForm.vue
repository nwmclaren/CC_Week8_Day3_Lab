<template lang="html">
  <form id="booking-form" v-on:submit="addBooking">
    <div class="wrapper">
      <label for="name">name:</label>
      <input type="text" id="name" v-model="name" required>
    </div>
    <div class="wrapper">
      <label for="email">e-mail:</label>
      <input type="email" id="email" v-model="email" required>
    </div>

    <div class="wrapper">
      <label for="checkedIn">Checked In ?:</label>
      <input type="checkbox" name="checkedIn" v-model="checkedIn">
    </div>
    <input type="submit" value="save" id="save">
  </form>
</template>

<script>
import BookingsService from '../services/BookingsService'
import {eventBus} from '../main.js'

export default {
  name: 'booking-form',
  data(){
    return{
      name: '',
      email: '',
      checkedIn: false
    }
  },
  methods: {
    addBooking(event) {
      event.preventDefault()
      const newBooking = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      }
      BookingsService.postBooking(newBooking);
      eventBus.$emit('new-booking', newBooking)
      event.target.reset()
    }
  }
}
</script>

<style lang="css" scoped>

#booking-form {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: lightblue;
}

</style>
