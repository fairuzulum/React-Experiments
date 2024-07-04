import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/count">useState</Link>
      <br />
      <Link to="/reducer">userReducer</Link>
      <br />
      <Link to="/useeffect">useEffect</Link>
      <br />
      <Link to="/customhook">customhook</Link>
      <br />
      <Link to="/useform">useform</Link>
      <br />
      <Link to="/redux">redux</Link>
      <br />
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
