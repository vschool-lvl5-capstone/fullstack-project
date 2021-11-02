import React, {useState} from "react";
import Datepicker from "react-datepicker"

export default function TravelRequest(props) {
  const {requestList, submit} = props
  const initInputs = {
    airline: "",
    departureLocation: "",
    arrivalLocation: "",
    dateDeparture: "",
    dateArrival: ""}
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (e) => {
      const {name, value} = e.target
      setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      //submit(inputs)
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
      <Datepicker />
      <button className="submitBtn">Request Travel</button>
      </form>
      {requestList.map(req => {
        return (
          <ul key={req._id}>
            <li>
              <h1>Airline: {req.airline}</h1>
            </li>
          </ul>
        )
      })}
    </div>
  )
}