import React,{useState} from "react";
import "./App.css";

import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

function App(){

const [weather,setWeather] = useState(null);

return(

<div className="container">

<h1>⛅ Weather Dashboard</h1>

<Search setWeather={setWeather}/>

<WeatherCard data={weather}/>

<Forecast forecast={weather?.forecast}/>

</div>

);

}

export default App;