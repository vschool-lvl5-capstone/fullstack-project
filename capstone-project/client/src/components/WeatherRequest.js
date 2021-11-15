import React, {useState} from "react";

export default function WeatherRequest(props) {
  const {submit, weather, setWeather} = props
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
        placeholder="City"
        value={weatherInputs.city}
        onChange={handleChange}
        style={{width: "15%"}}
        ></input>
        <input
        type="text"
        name="country"
        placeholder="Country"
        value={weatherInputs.country}
        onChange={handleChange}
        style={{width: "15%"}}
        ></input>
        <br/>
        <button className="submitBtn">Check Weather</button>
        <button className="deleteBtn" onClick={handleClear}>Clear Weather</button>
      </form>
      <div className="weather">
        {Object.keys(weather).length !== 0 ?
        <> 
          <h1>Current weather in: {weather.name}, {weather.sys?.country}</h1>
          <h3>Current Weather: {Math.floor(weather.main?.temp)}&#176;F but feels like {Math.floor(weather.main?.feels_like)}&#176;F</h3>
          <h3>Sunrise: {window.moment(weather.sys.sunrise * 1000).format(`HH:mm `)}</h3>
          <h3>Sunrise: {window.moment(weather.sys.sunset * 1000).format(`HH:mm `)}</h3>
          {weather.weather.map((weather, index) => {
            return (
              <div key={weather.id} className="weatherCondition">
                <h3 >{weather.description}</h3>
                <img alt="" src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}/>
              </div>
            )
          })}
        </>
        :
        <h1>Hey! pick a city </h1>    
        }
        
      </div>
    </div>
  )
}