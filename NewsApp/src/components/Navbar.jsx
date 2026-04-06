import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contactus">ContactUS</NavLink>
    </nav>
  );
}

export default Navbar;