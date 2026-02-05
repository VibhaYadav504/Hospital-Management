import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600 tracking-wide"
        >
          Health<span className="text-green-500">Care</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Book Appointment */}
          <NavLink
            to="/bookappointment"
            className="ml-4 px-6 py-2 rounded-full font-semibold text-white
                       bg-gradient-to-r from-blue-500 to-green-500
                       hover:from-blue-600 hover:to-green-600
                       transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Book Appointment
          </NavLink>

          {/* Login Button */}
          <Link
            to="/login"
            className="ml-4 px-6 py-2 rounded-full font-semibold text-white
                       bg-gray-700 hover:bg-gray-800 transition"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col gap-4 px-6 py-6">
            {menuItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/bookappointment"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center px-6 py-3 rounded-full font-semibold text-white
                         bg-gradient-to-r from-blue-500 to-green-500
                         hover:from-blue-600 hover:to-green-600 transition"
            >
              Book Appointment
            </NavLink>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center px-6 py-3 rounded-full font-semibold text-white bg-gray-700 hover:bg-gray-800 transition"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
