function WindDirection({ degree }) {
  if (!degree) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Wind Direction</h3>
      <div style={{
        fontSize: "40px",
        transform: `rotate(${degree}deg)`
      }}>
        ↑
      </div>
      <p>{degree}°</p>
    </div>
  );
}

export default WindDirection;