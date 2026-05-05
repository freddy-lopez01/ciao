import { useState } from "react";
import { NavLink } from "react-router";
import ciaoLogo from "../welcome/ciao-green-with-text_cropped.png";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/mission", label: "Mission" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 relative">
      <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo — far left */}
        <a href="/" className="flex-shrink-0">
          <img
            src={ciaoLogo}
            alt="Ciao"
            className="h-20 w-auto"
          />
        </a>

        {/* Desktop nav tabs */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  [
                    "text-lg font-medium px-7 py-2 rounded-lg border transition-colors duration-150",
                    isActive
                      ? "text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                      : "text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800",
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop right slot */}
        <div className="hidden md:flex flex-shrink-0 w-[120px] justify-end">
          {/* Add a button or auth control here if needed */}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 right-0 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-bl-xl shadow-lg z-50">
          <ul className="flex flex-col p-3 gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      "block text-base font-medium px-4 py-3 rounded-lg border transition-colors duration-150",
                      isActive
                        ? "text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                        : "text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800",
                    ].join(" ")
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
