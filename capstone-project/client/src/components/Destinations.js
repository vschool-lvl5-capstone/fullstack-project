import React, {useState} from "react";

export default function Destinations(props) {  
  const {destinations, submit, deleteDes} = props
  const initInputs = {
    countryLocation: "",
    ticketPrice: "",
    yearTravelled: ""
  }
  const [inputs, setInputs] = useState({initInputs})

  const handleChange = (e) => {
    const {name, value} = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    submit(inputs)
    setInputs(initInputs)
  }
  
  return (
   <div className="destinations">
     <form className="destinationForm" onSubmit={handleSubmit}>
     <h1 style={{color: "#33312e"}}>Tell us where you've been...</h1>
      <label htmlFor="countryLocation"> Tell us where you went</label>
      <input
      name = "countryLocation"
      value = {inputs.countryLocation}
      placeholder = "....country?"
      type = "text"
      onChange={handleChange}
      ></input>
      <br/>
      <label htmlFor="ticketPrice"> How much was your ticket?</label>
      <input
      name = "ticketPrice"
      value = {inputs.ticketPrice}
      placeholder = "How much was your ticket?"
      type = "number"
      onChange={handleChange}
      ></input>
      <br/>
      <label htmlFor="yearTravelled">What year did you go in?</label>
      <input
      name = "yearTravelled"
      value = {inputs.yearTravelled}
      placeholder = "what year did you travel in?"
      type = "number"
      onChange={handleChange}
      ></input>
      <br/>
      <button className="submitBtn">Submit your previous destination</button>
     </form>
     <div className="destinationList">
     <h1><u>Places you've been:</u></h1>
      {destinations.map(spot => {
        return (
          <ul key={spot._id}>
            <li>
              <h1>Country visited: {spot.countryLocation}</h1>
              <h2>Ticket price: ${parseInt(`${spot.ticketPrice}`)}</h2>
              <h3>Year you went: {spot.yearTravelled}</h3>
            </li>
            <button onClick={() => deleteDes(spot._id)} className="deleteBtn">Delete</button>
          </ul>
        )
      })}
     </div>
   </div>
  )
}