import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import hamburgerIcon from "../assets/icons/hamburger.svg";
import closeIcon from "../assets/icons/close.svg";

const MobileNav = () => {
  const [isActive, setisActive] = useState(false);

  function handleClick() {
    setisActive((prevState) => !prevState);
  }

  return (
    <nav className="sticky top-0 z-10 flex w-full flex-col bg-white">
      <div className="relative flex h-16 w-full items-center justify-center px-8">
        <button
          type="button"
          className={`${
            isActive ? "inactive-button" : ""
          } absolute left-8 top-6  transition-[transform,_opacity] duration-300 ease-in`}
          onClick={handleClick}
        >
          <img src={hamburgerIcon} alt="" />
        </button>
        <button
          type="button"
          className={`${
            !isActive ? "inactive-button" : ""
          } absolute left-8 top-6  transition-[transform,_opacity] duration-300 ease-in`}
          onClick={handleClick}
        >
          <img src={closeIcon} alt="" />
        </button>
        <Link
          onClick={() => {
            setisActive(false);
            window.scrollTo({
              top: 0,
            });
          }}
          className="h-[1.25rem] w-[4.688rem] "
          to="/"
        >
          <img src={logo} alt="" />
        </Link>
      </div>
      <div
        className={`${
          !isActive ? "inactive-nav" : ""
        } fixed top-16 z-10 h-[calc(100vh_-_4rem)] w-full bg-black/75 transition-opacity duration-300 ease-in`}
      >
        <div
          className={`${
            isActive ? "translate-x-0" : "-translate-x-full"
          } flex h-full w-[68.27%]  flex-col justify-between bg-[#333A44] px-8 pt-16 pb-6 transition-transform duration-300 ease-out`}
        >
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                onClick={handleClick}
                className="font-mobile-nav"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                className="font-mobile-nav"
                to="/locations"
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                className="font-mobile-nav"
                to="/careers"
              >
                Careers
              </Link>
            </li>
          </ul>
          <Link onClick={handleClick} className="btn" to="">
            Get Scootin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
