import React, {useState, useEffect} from "react";
import axois from "axios"
import {Route, Switch, Link} from "react-router-dom"

import Home from "./Home";
import TravelRequest from "./TravelRequest";
import Destinations from "./Destinations";

export default function App() {
  const [destination, setDestinations] = useState([])
  const [request, setRequest] = useState([])
  //console.log('request: ', request);

  //requests
  const getRequest = () => {
    axois.get("/travelagency/request")
      .then(res => setRequest(res.data))
      .catch(res => console.log(res))
  }
  const postRequest = () => {
    axois.post("/travelagency/request", )
      .then(res => console.log(res.data))
      .catch(res => console.log(res))
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
    </ul>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/request-travel">
        <TravelRequest
        requestList={request}
        submit={postRequest}
        />
      </Route>
      <Route path="/destinations">
        <Destinations 
        destinations={destination}
        deleteDes={deleteDestination}
        submit={postDestination}/>
      </Route>
    </Switch>
  </div>
  )
}