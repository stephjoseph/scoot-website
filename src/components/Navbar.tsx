import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import hamburgerIcon from "../assets/icons/hamburger.svg";

const Navbar = () => {
  return (
    <nav className="relative flex h-16 w-full items-center justify-center px-8">
      <button type="button" className="absolute left-8 top-6">
        <img src={hamburgerIcon} alt="" />
      </button>
      <Link className="h-[1.25rem] w-[4.688rem] " to="/">
        <img src={logo} alt="" />
      </Link>
    </nav>
  );
};

export default Navbar;
