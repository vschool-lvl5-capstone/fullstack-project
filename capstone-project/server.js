const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')

//middleware
app.use(express.json())
app.use(morgan("dev"))

//connect mongoose
mongoose.connect("mongodb://localhost:27017/travelagencydb",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
},
() => console.log("Connected to the Travel Agency DB")
)
//routes
app.use("/travelagency/user", require("./routes/userRouter"))
app.use("/travelagency/destinations", require("./routes/travelRouter"))
app.use("/travelagency/request", require("./routes/requestRouter"))
//error catching
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({err: err.message})
})
//port listen
app.listen(9000, () => {
  console.log("App is running on Port 9000")
})