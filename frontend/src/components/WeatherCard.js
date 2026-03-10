import React from "react";

function WeatherCard({data}){

if(!data) return null;

return(

<div>

<h2>{data.city}</h2>

<p>Temperature: {data.temperature}°C</p>

<p>Humidity: {data.humidity}%</p>

<p>Wind Speed: {data.windSpeed} m/s</p>

<p>Wind Direction: {data.windDirection}°</p>

</div>

);

}

export default WeatherCard;