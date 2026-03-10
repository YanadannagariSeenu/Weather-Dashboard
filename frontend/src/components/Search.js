import React, { useState } from "react";
import axios from "axios";

function Search({ setWeather }) {

const [city,setCity] = useState("");

const searchWeather = async () => {

 const res = await axios.get(
  `http://localhost:5000/api/weather/${city}`
 );

 setWeather(res.data);

};

return (

<div>

<input
placeholder="Enter city"
value={city}
onChange={(e)=>setCity(e.target.value)}
/>

<button onClick={searchWeather}>
Search
</button>

</div>

);

}

export default Search;