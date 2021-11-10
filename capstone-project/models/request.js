const mongoose = require("mongoose")
const Schema = mongoose.Schema

const requestTravelSchema = new Schema ({
  airline: {
    type: String,
    required: true
  },
  departureLocation: {
    type: String, 
    required: true
  },
  arrivalLocation: {
    type: String, 
    required: true
  },
  dateDeparture: {
    type: String,
    required: true
  },
  dateArrival: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("RequestTravel", requestTravelSchema)