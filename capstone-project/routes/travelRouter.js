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
travelRouter.route("/:userId")
  .post((req, res, next) => {
    req.body.user = req.params.userId
    const newDestination = new destinations(req.body)
    newDestination.save((err, newSpot) => {
      if(err) {
        res.status(err)
        return next(err)
      }
      return res.status(201).send(newSpot)
    })
  })

module.exports = travelRouter