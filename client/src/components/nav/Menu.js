//NavBar 


import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";

import "../../index.css";


export default function Menu() {
  // context
  const [auth, setAuth] = useAuth();

  const loggedIn = auth?.user !== null && auth?.token !== "";

  const logout = () => {
    setAuth({ user: null, token: "", refreshToken: "" });
    localStorage.removeItem("auth");
  };

  return (
    // <ul className="nav d-flex justify-content-between lead //color-bootstrap">
    <ul className="nav d-flex justify-content-between lead ">
      <li>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/search">
          Search
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/ad/create">
          Ad Post
        </NavLink>
      </li>
      {!loggedIn ? (
        <>
          <li>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}

      {loggedIn ? (
        <div className="dropdown">
          <li>
            {/* <img src="" alt="error img" /> */}
            <a
              className="nav-link pointer dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              {auth?.user?.name ? auth.user.name : auth.user.username}
            </a>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="nav-link" to={`/dashboard`}>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <a onClick={logout} className="nav-link pointer">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </div>
      ) : (
        ""
      )}
    </ul>
  );
}