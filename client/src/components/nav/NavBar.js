import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { useAuth } from "../../context/auth";

function NavBar() {

  const [click, setClick] = useState(false);
  const [auth, setAuth] = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    // Initial check on mount
    handleResize();

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const loggedIn = auth?.user !== null && auth?.token !== "";
  const logout = () => {
    setAuth({ user: null, token: "", refreshToken: "" });
    localStorage.removeItem("auth");
  };

  const handleClick = () => setClick(!click);


  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navcontainer}>
          <i className={`${styles.icons} fa-solid fa-house-user`}></i>
          <span className={styles.navlogo} >Rentify</span>
          <ul className={click ? `${styles.navmenu} ${styles.active}` : styles.navmenu}>
            <li className={styles.navitem}>
              <NavLink
                exact
                to="/"
                activeClassName={styles.active}
                className={styles.navlinks}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navitem}>
              <NavLink
                exact
                to="/about"
                activeClassName={styles.active}
                className={styles.navlinks}
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className={styles.navitem}>
              <NavLink
                exact
                to="/search"
                activeClassName={styles.active}
                className={styles.navlinks}
                onClick={handleClick}
              >
                Search
              </NavLink>
            </li>
            {!loggedIn ? (
              <>
                <li className={styles.navitem}>
                  <NavLink
                    exact
                    to="/login"
                    activeClassName={styles.active}
                    className={styles.navlinks}
                    onClick={handleClick}
                  >
                    Login
                  </NavLink>
                </li>
                <li className={styles.navitem}>
                  <NavLink
                    exact
                    to="/register"
                    activeClassName={styles.active}
                    className={styles.navlinks}
                    onClick={handleClick}
                  >
                    Register
                  </NavLink>
                </li>
                <li className={styles.navitem}>
                  <NavLink
                    exact
                    to="/contact"
                    activeClassName={styles.active}
                    className={styles.navlinks}
                    onClick={handleClick}
                  >
                    Contact us
                  </NavLink>
                </li>

              </>
            ) : (
              ""
            )}
            {loggedIn ? (
              <>
                <li className={styles.navitem}>
                  <NavLink
                    exact
                    to="/ad/create"
                    activeClassName={styles.active}
                    className={styles.navlinks}
                    onClick={handleClick}
                  >
                    Ad Post
                  </NavLink>
                </li>

                {isMobile ? (
                  // Render dropdown component outside the navbar for smaller screens
                  <>
                    <li className={styles.navitem}>
                      <NavLink
                        exact
                        to="/dashboard"
                        activeClassName={styles.active}
                        className={styles.navlinks}
                        onClick={handleClick}
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li className={styles.navitem}>
                      <NavLink
                        exact
                        to="/ad/create"
                        activeClassName={styles.active}
                        className={styles.navlinks}
                        onClick={logout}
                      >
                        Logout
                      </NavLink>
                    </li>
                  </>
                ) : (
                  // Render other components for full-sized screens
                  <div className={`dropdown`} >
                    <li className={styles.navitem}>

                      <a
                        // exact
                        // to="/dashboard"
                        // activeClassName="active"

                        className={`${styles.navlinks} pointer dropdown-toggle`}
                        data-bs-toggle={`dropdown`}

                      // onClick={handleClick}
                      >
                        {auth?.user?.name ? auth.user.name : auth.user.username}
                      </a>

                      <ul className={`dropdown-menu ${styles.bgchange}`} >

                        <li className={styles.navitem}>
                          <NavLink
                            // exact.
                            to="/dashboard"
                            className={styles.navlinks}
                            onClick={handleClick}
                          >
                            Dashboard
                          </NavLink>
                        </li>
                        <li className={styles.navitem}>
                          <NavLink
                            // exact
                            to="/login"
                            className={styles.navlinks}
                            onClick={logout}
                          >
                            Logout
                          </NavLink>
                        </li>


                      </ul>
                    </li>
                  </div>

                )}

              </>
            ) : (
              ""
            )}


          </ul>
          <div className={styles.navicon} onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className={styles.icon}>
                < HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className={styles.icon}>
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
