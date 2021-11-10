import React, {useState} from "react";

export default function WeatherRequest(props) {
  const {submit, weather, setWeather} = props
  console.log('weather: ', weather);
  const initWeatherInputs = {
    city: "",
    country: ""
  }
  const [weatherInputs, setWeatherInputs] = useState(initWeatherInputs)
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setWeatherInputs(prevInputs => ({...prevInputs, [name]: value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    submit(weatherInputs.city)
    setWeatherInputs(initWeatherInputs)
  }
  const handleClear = () => {
    setWeather({})
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="weatherForm">
      <h1 className="formHeader">Don't forget to check the weather!</h1>
        <label>Check the weather where you're going</label>
        <input
        type="text"
        name="city"
        placeholder="city"
        value={weatherInputs.city}
        onChange={handleChange}
        ></input>
        <input
        type="text"
        name="country"
        placeholder="country"
        value={weatherInputs.country}
        onChange={handleChange}
        ></input>
        <br/>
        <button className="submitBtn">Check Weather</button>
        <button className="deleteBtn" onClick={handleClear}>Clear Weather</button>
      </form>
      <div className="weather">
        {Object.keys(weather).length !== 0 ?
        <> 
          <h1>City: {weather.name}, {weather.sys?.country}</h1>
          <h3>Current Weather: {Math.floor(weather.main?.temp)}&#176;F but feels like {Math.floor(weather.main?.feels_like)}&#176;F</h3>
        </>
        :
        <h1>Pick a city </h1>    
        }
        
      </div>
    </div>
  )
}