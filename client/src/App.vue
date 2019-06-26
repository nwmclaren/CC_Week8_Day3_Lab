<template>
  <div id="app">
    <site-header/>
    <booking-form/>
    <table-container :bookings="bookings"/>

  </div>
</template>

<script>
import BookingForm from './components/bookingForm.vue'
import SiteHeader from './components/SiteHeader.vue'
import tableContainer from './components/tableContainer.vue'
import {eventBus} from './main.js'

export default {
  name: 'app',
  components: {
    'booking-form':BookingForm,
    'site-header':SiteHeader,
    'table-container': tableContainer

  },
  data(){
    return {
      bookings: []
    }
  },
  mounted() {
    this.fetchData()
    eventBus.$on('new-booking', newBooking => this.bookings.push(newBooking))
    eventBus.$on('delete-booking', id => {
        let index = this.bookings.findIndex(booking => booking._id === id)
        this.bookings.splice(index, 1)
    })
  },
  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/bookings")
      .then(res => res.json())
      .then(result => this.bookings = result)
    }
  }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-rows: 15vh 10vh auto;
  grid-template-columns: 100vw;
}
</style>
