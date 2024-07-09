import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "./redux/feature/authSlice";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome, {user.name}</h1>
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
          <Link to="/contex">contex</Link>
          <br />
          <Link to="/api"> Access API</Link>
          <br />
          <br />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Welcome, Guest</h1>
          <hr />
          <p>Oops..</p>
          <h5>Please Login</h5>
          <Link className="btn btn-sm mt-5 btn-outline-primary" to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
