const mongoose = require("mongoose")
const Schema = mongoose.Schema

const destinationSchema = new Schema ({
  countryLocation: {
    type: String,
    require: true
  },
  ticketPrice: {
    type: Number,
    require: true
  },
  yearTravelled: {
    type: Number,
    require: true
  }
})

module.exports = mongoose.model("Destinations", destinationSchema)