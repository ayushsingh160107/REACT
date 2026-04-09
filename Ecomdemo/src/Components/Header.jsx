import { Link } from "react-router-dom";

export default function Header({ cartCount }) {
  return (
    <div className="header">
      <h2>React Demo App</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </div>
  );
}