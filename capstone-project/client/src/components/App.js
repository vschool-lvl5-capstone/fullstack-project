import React, {useState, useEffect} from "react";
import axois from "axios"
import {Route, Switch, Link} from "react-router-dom"

import Home from "./Home";
import TravelRequest from "./TravelRequest";
import Destinations from "./Destinations";
import WeatherRequest from "./WeatherRequest";
import axios from "axios";

export default function App() {
  const [destination, setDestinations] = useState([])
  const [request, setRequest] = useState([])
  const [weather, setWeather] = useState({})
  //console.log('request: ', request);

  //requests
  const getRequest = () => {
    axois.get("/travelagency/request")
      .then(res => setRequest(res.data))
      .catch(res => console.log(res))
  }
  const postRequest = (newRequest) => {
    console.log('newRequest: ', newRequest);
    axois.post("/travelagency/request", newRequest)
    .then(res => {
      console.log(res.data)
      setRequest(prevRequest => [...prevRequest, res.data])
    })
    .catch(err => console.log(err))
  }
  const deleteRequest = (id) => {
    console.log('id: ', id);
    axois.delete(`/travelagency/request/${id}`)
    .then(res => {
      console.log(res.data)
      setRequest(prevRequest => prevRequest.filter(request => request._id !== id ))
    })
    .catch(err => console.log(err))
  }
  //destinations
  function getDestination() {
    axois.get("/travelagency/destinations")
      .then(res => {
        setDestinations(res.data)
      })
      .catch(err => console.log(err))
  }
  const postDestination = (newpost) => {
    axois.post("/travelagency/destinations", newpost)
      .then(res => {
        console.log(res.data)
        setDestinations(prevDestinations => [...prevDestinations, res.data])
      })
      .catch(err => console.log(err))
  }
  const deleteDestination = (id) => {
    console.log('id: ', id);
    axois.delete(`/travelagency/destinations/${id}`)
      .then(res => {
        console.log(res)
        setDestinations(prevDestination => prevDestination.filter(des => des._id !== id))
      })
      .catch(err => console.log(err))
  }
  //weather request
  const getWeather = (city) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=3215e39c50c6e69edf517933f5e17a88`)
      .then(res => {
        console.log(res.data)
        setWeather(res.data)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getDestination()
    getRequest()
  }, [])
  return (
    <div  >
    <ul className="navbar" >
      <li className="navbaroptions" style={{fontSize: "30px"}}><Link to="/">Home</Link></li>
      <li className="navbaroptions" style={{fontSize: "30px"}}><Link to="/request-travel">Request Travel</Link></li>
      <li className="navbaroptions" style={{fontSize: "30px"}}><Link to="/destinations">Destinations</Link></li>
      <li className="navbaroptions" style={{fontSize: "30px"}}><Link to="/weather">Weather</Link></li>
    </ul>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/request-travel">
        <TravelRequest
        requestList={request}
        submit={postRequest}
        deleteRequest={deleteRequest}
        />
      </Route>
      <Route path="/destinations">
        <Destinations 
        destinations={destination}
        deleteDes={deleteDestination}
        submit={postDestination}/>
      </Route>
      <Route>
        <WeatherRequest
        submit={getWeather}
        weather={weather}
        setWeather={setWeather}
        />
      </Route>
    </Switch>
  </div>
  )
}