import React from "react";

function Forecast({ forecast }) {

if(!forecast) return null;

return(

<div className="forecast-container">

<h3>2 Day Forecast</h3>

<div className="forecast-grid">

{forecast.map((item,index)=>(

<div className="forecast-card" key={index}>

<p>
{new Date(item.dt_txt).toLocaleDateString("en-US",{weekday:"long"})}
</p>

<img
src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
alt="weather icon"
/>

<p>{item.main.temp}°C</p>

</div>

))}

</div>

</div>

);

}

export default Forecast;