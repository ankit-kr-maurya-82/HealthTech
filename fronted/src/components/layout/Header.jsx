import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header className="">
      <nav className="">

        {/* Logo */}
        <Link to="/" className="">
          CareMe
        </Link>

        {/* Nav Links */}
        <ul className="">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>

        {/* Auth Buttons */}
        <div className="">

          {/* Register Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowRegister(!showRegister)}
              className=""
            >
              Register
            </button>

            {showRegister && (
              <div className="">
                <Link
                  to="/register/patient"
                  className=""
                >
                  Patient Register
                </Link>
                <Link
                  to="/register/doctor"
                  className=""
                >
                  Doctor Register
                </Link>
              </div>
            )}
          </div>

          {/* Login Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowLogin(!showLogin)}
              className=""
            >
              Login
            </button>

            {showLogin && (
              <div className="">
                <Link
                  to="/login/patient"
                  className=""
                >
                  Patient Login
                </Link>
                <Link
                  to="/login/doctor"
                  className=""
                >
                  Doctor Login
                </Link>
              </div>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
