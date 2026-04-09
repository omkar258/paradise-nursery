import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🌿 Paradise Nursery</h1>
      <p>Welcome to your one-stop plant shop!</p>

      <button onClick={() => window.location.href = "#plants"}>
        Get Started
      </button>
    </div>
  );
}

export default App;
