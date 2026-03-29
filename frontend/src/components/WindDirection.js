function getDirection(deg) {
  if (deg >= 337.5 || deg < 22.5) return "North";
  if (deg >= 22.5 && deg < 67.5) return "NorthEast";
  if (deg >= 67.5 && deg < 112.5) return "East";
  if (deg >= 112.5 && deg < 157.5) return "SouthEast";
  if (deg >= 157.5 && deg < 202.5) return "South";
  if (deg >= 202.5 && deg < 247.5) return "SouthWest";
  if (deg >= 247.5 && deg < 292.5) return "West";
  if (deg >= 292.5 && deg < 337.5) return "NorthWest";
}

function WindDirection({ degree }) {
  if (!degree) return null;

  const direction = getDirection(degree);

  return (
    <div className="wind-box">
      <h2>Wind Direction</h2>

      <div
        className="arrow"
        style={{ transform: `rotate(${degree}deg)` }}
      >
        ➤
      </div>

      <p className="degree">{degree}°</p>
      <p className="direction">{direction}</p>
    </div>
  );
}

export default WindDirection;