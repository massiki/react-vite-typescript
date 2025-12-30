import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-head">
        MyApp
      </div>
      <ul className="nav-content">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/products'}>Products</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar