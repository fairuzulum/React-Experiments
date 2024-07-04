import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button
          style={{ backgroundColor: "pink" }}
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
        <h1>count is {count}</h1>

        <button
          style={{ backgroundColor: "pink" }}
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}

export default App;
