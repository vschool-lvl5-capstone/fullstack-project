const express = require("express")
const { findOneAndUpdate } = require("../models/destinations")
const travelRouter = express.Router()
const destination = require("../models/destinations")

travelRouter.route("/")
  .get((req, res, next) => {
    destination.find((err, destination) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(destination)
    })
  })
  .post((req, res, next) => {
    const newDestination = new destination(req.body)
    newDestination.save((err, destination) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(destination)
    })
  })
  travelRouter.route("/:destinationID")
    .get((req, res, next) => {
      destination.findById(req.params.destinationID, (err, request) => {
        if(err) {
          res.status(500)
          const err = new Error(`The request with id ${req.params.destinationID} was not found.`)
          return next(err)
        }
        return res.status(200).send(request)
      })
    })
    .delete((req, res, next) => {
      destination.findOneAndDelete({_id: req.params.destinationID}, (err, deletedDestination) => {
        if(err) {
          res.status(500)
          return next(err)
        }
        return res.status(200).send(deletedDestination)
      })
    })
    .put((req, res, next) => {
      findOneAndUpdate(
        {_id: req.params.destinationID},
        req.body,
        {new: true},
        (err, updatedDestnation) => {
          if(err) {
            res.status(500)
            return next(err)
          }
          return res.status(200).send(updatedDestnation)
        }
      )
    })

module.exports = travelRouter