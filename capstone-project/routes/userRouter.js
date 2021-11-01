const express = require("express")
const userRouter = express.Router()
const user = require("../models/user")

userRouter.route("/")
  .get((req, res, next) => {
    user.find((err, user) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(user)
    })
  })

  .post((req, res, next) => {
    const newUser = new user(req.body)
    newUser.save((err, newUsers) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(newUsers)
    })
  })

module.exports = userRouter