import React from "react";

export default function Home() {
  return (
    <div className="home">
      <h1 style={{color: "#33312e"}}>Infinity and Beyond Travel Agency</h1>
      <p style={{fontSize: "20px"}}>Welcome user!<br/><br/>
      Utilizing MongoDB, Express, React and Node JS, I created this App to allow users<br/>
      to request flights to airlines, see where they've been, and<br/>
      check the weather of where they would like to travel to. For my weather<br/>
      page I utilized the openweathermap API to display my weather data.
      </p>
    </div>
  )
}