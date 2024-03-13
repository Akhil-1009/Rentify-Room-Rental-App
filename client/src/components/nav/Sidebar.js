// even though it's called sidebar, it will sit on top, just below main nav
// feel free to put it on side
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ul className="nav nav-tabs ">
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user/wishlist">
            Wishlist
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user/enquiries">
            Enquiries
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/ad/create">
            Create Ad
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user/profile">
            Update Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user/settings">
            Settings
          </NavLink>
        </li>

      </ul>
    </div>

  );
}