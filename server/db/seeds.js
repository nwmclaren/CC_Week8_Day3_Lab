use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "The Colonel",
    email: "colonel@fawltytowers.uk",
    checkedIn: true
  },
  {
    name: "Mr Leeman",
    email: "leeman@fawltytowers",
    checkedIn: false
  },
  {
    name: "Lord Melbury",
    email: "connartist@thievesrus",
    checkedIn: true
  }

])
