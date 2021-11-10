import React, {useState} from "react";

export default function TravelRequest(props) {
  const {requestList, submit, deleteRequest} = props
  const initInputs = {
    airline: "",
    departureLocation: "",
    arrivalLocation: "",
    dateDeparture: "",
    dateArrival: "",
    status: "Pending Approval"}
    const [inputs, setInputs] = useState(initInputs)

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
    <div className="requests">
      <form className="requestForm" onSubmit={handleSubmit}>
        <h1 style={{color: "#33312e"}}>Submit your travel request</h1>
        <label>Select your airline:</label>
        <select name="airline" value={inputs.airline} onChange={handleChange}>
          <option  name="airline" value="American Airlines">American Airlines</option>
          <option  name="airline" value="Southwest Airlines">Southwest Airlines</option>
          <option  name="airline" value="United Airlines">United Airlines</option>
          <option  name="airline" value="Delta Airlines">Delta Airlines</option>
        </select>
        <br/>
        <label> Where do you want to depart from?</label>
        <input 
        type="text"
        name="departureLocation"
        value={inputs.departureLocation}
        onChange={handleChange}

        ></input>
        <br/>
        <label>Pick the day you want to leave.</label>
        <input 
        type="date"
        name="dateDeparture"
        value={inputs.dateDeparture}
        onChange={handleChange}

        ></input>
        <br/>
        <label>Where you going?</label>
        <input 
        type="text"
        name="arrivalLocation"
        value={inputs.arrivalLocation}
        onChange={handleChange}

        ></input>
        <br/>
        <label>When you coming back?</label>
        <input 
        type="date"
        name="dateArrival"
        value={inputs.dateArrival}
        onChange={handleChange}

        ></input>
        <br/>
      <button className="submitBtn">Request Travel</button>
      </form>
      <h1><u>Pending Requests:</u></h1>
      {requestList.map(req => {
        return (
          <ul key={req._id}>
            <li>
              <h2>Airline: {req.airline}</h2>
              <h3>From: {req.departureLocation} To: {req.arrivalLocation}</h3>
              <h3>Date: {req.dateDeparture} - {req.dateArrival}</h3>
              <h3>Status: {req.status}</h3>
              <button className="deleteBtn" onClick={() => deleteRequest(req._id)}>Delete request</button>
            </li>
          </ul>
        )
      })}
    </div>
  )
}