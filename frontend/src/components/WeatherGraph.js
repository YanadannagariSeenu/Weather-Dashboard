import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";

function WeatherGraph({ forecast }) {
  if (!forecast) return null;

  const data = forecast.map((item, index) => ({
    name: `T${index}`,
    temp: item.main.temp,
  }));

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Temperature Graph</h3>
      <LineChart width={400} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid />
        <Line type="monotone" dataKey="temp" />
      </LineChart>
    </div>
  );
}

export default WeatherGraph;