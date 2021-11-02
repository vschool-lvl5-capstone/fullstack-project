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
  // .post((req, res, next) => {
  //   const newTravel = new requestTravel(req.body)
  //   newTravel.save((err, newRequest) => {
  //     if(err) {
  //       res.status(500)
  //       return next(err)
  //     }
  //     return res.status(200).send(newRequest)
  //   })
  // })
  requestRouter.route("/:userId")
  .post((req, res, next) => {
    req.body.user = req.params.userId
    const newRequest = new requestTravel(req.body)
    newRequest.save((err, newSpot) => {
      if(err) {
        res.status(err)
        return next(err)
      }
      return res.status(201).send(newSpot)
    })
  })

  requestRouter.route("/:requestID")
    .get((req, res, next) => {
      requestTravel.findById(req.params.requestID, (err, request) => {
        if(err) {
          res.status(500)
          const err = new Error(`The request with id ${req.params.requestID} was not found.`)
          return next(err)
        }
        return res.status(200).send(request)
      })
    })
    .delete((req, res, next) => {
      requestTravel.findOneAndDelete({_id: req.params.requestID}, (err, requestDeleted) => {
        if(err) {
          res.status(500)
          return next(err)
        }
        return res.status(200).send(requestDeleted)
      })
    })
    .put((req, res, next) => {
      findOneAndUpdate(
        {_id: req.params.requestID},
        req.body,
        {new: true},
        (err, updatedrequest) => {
          if(err) {
            res.status(500)
            return next(err)
          }
          return res.status(200).send(updatedrequest)
        }
      )
    })

module.exports = requestRouter