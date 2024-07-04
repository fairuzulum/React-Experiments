import { React } from 'react';
import { Link } from 'react-router-dom';
import { useTogle } from './customHook/custom';


export default function CustomHook() {

    const [isTogle, togle] = useTogle();

  return (
    <>
      <div className="card">
        <h1 style={{ color: 'black' }}>{isTogle ? "ON" : "OFF"}</h1>

        <button
          style={{ backgroundColor: "pink" }}
          onClick={() => togle()}
        >
          click
        </button>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </>
  )
}
