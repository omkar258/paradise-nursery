import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>🌿 Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful plants</p>

      <button onClick={() => window.location.href = "#plants"}>
        Get Started
      </button>
    </div>
  );
}

export default App;
