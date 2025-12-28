import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <h2>🎬 Movie App</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
