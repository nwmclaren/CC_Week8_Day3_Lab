<template lang="html">
  <div class="table-container">
    <table>
      <tr>
        <th>Name</th>
        <th>E-mail</th>
        <th>Checked In</th>
        <th>Admin</th>
      </tr>
      <tr v-for="(booking, index) in bookings" :key="index">
        <td>{{ booking.name }}</td>
        <td>{{ booking.email }}</td>
        <td>
          <input type="checkbox" v-model="booking.checkedIn" v-on:click="toggleCheckIn(booking)">
        </td>
        <td>
          <button type="button" v-on:click="deleteGuest(booking._id)"name="delete">Delete Guest</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import BookingsService from '../services/BookingsService.js'
import {eventBus} from '../main.js'
export default {
  name: 'table-container',
  props: ['bookings'],
  methods: {
    toggleCheckIn(booking) {
      let updatedStatus = true;
      if (booking.checkedIn === true) {
        updatedStatus = false
      } else {
        updatedStatus = true
      }
      BookingsService.updateBooking(booking._id, {checkedIn: updatedStatus})
    },

    deleteGuest(id){
      BookingsService.deleteBooking(id);
      eventBus.$emit('delete-booking', id)
    }
  }
}
</script>

<style lang="css" scoped>

.table-container {
  display: flex;
  justify-content: center
}

table {
  background-color: white;
  width: 80vw;
}

</style>
