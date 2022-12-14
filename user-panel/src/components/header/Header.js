import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const [headerBg, setHeaderBg] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    });
  }, []);

  return (
    <div
      className={
        headerBg
          ? "shadow-sm bg-white w-full fixed z-10 transition-all"
          : menu
          ? "w-full fixed z-10 transition-all bg-white"
          : "w-full fixed z-10 transition-all"
      }
    >
      <div className="w-10/12 m-auto flex justify-between items-center py-5">
        <div
          className="lg:hidden rounded-sm w-7 h-6 flex justify-center items-center cursor-pointer gap-5"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="" />
          <div className="flex text-2xl font-extrabold">
            <p>HEALTH</p>
            <p className="text-red-600">CARE</p>
          </div>
        </Link>
        <ul className="lg:flex gap-10 hidden">
          <li className="hover:text-red-600 transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-600 transition-all">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="hover:text-red-600 transition-all">
            <Link to="/commingsoon">Companies</Link>
          </li>
          <li className="hover:text-red-600 transition-all">
            <Link to="/commingsoon">Patients</Link>
          </li>
          <li className="hover:text-red-600 transition-all">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-red-600 transition-all">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-red-600 transition-all">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      {menu && (
        <div className="bg-white border">
          <ul className="space-y-5 py-5 w-10/12 m-auto border-t block lg:hidden">
            <li className="hover:text-red-600 transition-all">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red-600 transition-all">
              <Link to="/signup">Signup</Link>
            </li>
            <li className="hover:text-red-600 transition-all">
              <Link to="/commingsoon">Companies</Link>
            </li>
            <li className="hover:text-red-600 transition-all">
              <Link to="/commingsoon">Patients</Link>
            </li>
            <li className="hover:text-red-600 transition-all">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-red-600 transition-all">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-red-600 transition-all">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
