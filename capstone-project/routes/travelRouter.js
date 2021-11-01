const express = require("express")
const travelRouter = express.Router()
const destinations = require("../models/destinations")

travelRouter.route("/")
  .get((req, res, next) => {
    destinations.find((err, destination) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(destination)
    })
  })

module.exports = travelRouter