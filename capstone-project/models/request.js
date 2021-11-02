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
    type: Date,
    required: true
  },
  dateArrival: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  } 
})

module.exports = mongoose.model("RequestTravel", requestTravelSchema)