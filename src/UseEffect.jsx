import { useState, React, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Hook() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => { 
        setCount2(count2 + 10);
    }, [count]);

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
        <h1>count2 is {count2}</h1>

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
  )
}
