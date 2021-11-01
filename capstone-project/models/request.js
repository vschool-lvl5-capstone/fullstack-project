const mongoose = require("mongoose")
const Schema = mongoose.Schema

const requestTravelSchema = new Schema ({
  arline: {
    type: String,
    require: true
  },
  departureLocation: {
    type: String, 
    require: true
  },
  arrivalLocation: {
    type: String, 
    require: true
  },
  dateDeparture: {
    type: Date,
    require: true
  },
  dateArrival: {
    type: Date,
    require: true
  }
})

module.exports = mongoose.model("RequestTravel", requestTravelSchema)