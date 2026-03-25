import { useEffect, useState } from "react";

function RecentSearches({ onSelect }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentCities")) || [];
    setCities(stored);
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Recent Searches</h3>
      {cities.map((city, i) => (
        <button key={i} onClick={() => onSelect(city)}>
          {city}
        </button>
      ))}
    </div>
  );
}

export default RecentSearches;