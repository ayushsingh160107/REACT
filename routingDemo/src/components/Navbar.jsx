import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/details/1">student 1</NavLink>
      <NavLink to="/details/2">student 2</NavLink>
    </nav>
  );
}

export default Navbar;