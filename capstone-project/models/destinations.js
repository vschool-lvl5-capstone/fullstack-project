const mongoose = require("mongoose")
const Schema = mongoose.Schema

const destinationSchema = new Schema ({
  countryLocation: {
    type: String,
    required: true
  },
  ticketPrice: {
    type: Number,
    required: true
  },
  yearTravelled: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Destinations", destinationSchema)