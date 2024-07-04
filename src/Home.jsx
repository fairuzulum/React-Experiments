import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "./redux/feature/authSlice";

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
      <h1>Hello, {user.user}</h1>

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
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
     
    </div>
  );
}
