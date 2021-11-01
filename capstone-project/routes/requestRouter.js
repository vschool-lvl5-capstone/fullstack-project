const express = require("express")
const requestRouter = express.Router()
const requestTravel = require("../models/request")

requestRouter.route("/")
  .get((req, res, next) => {
    requestTravel.find((err, travelRequested) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(travelRequested)
    })
  })
  .post((req, res, next) => {
    const newTravel = new requestTravel(req.body)
    newTravel.save((err, newRequest) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(newRequest)
    })
  })

module.exports = requestRouter