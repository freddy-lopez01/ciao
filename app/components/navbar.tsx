import { NavLink } from "react-router";
import ciaoLogo from "../welcome/ciao-green-with-text_cropped.png";
 
const navLinks = [
  { to: "/about", label: "About" },
  { to: "/mission", label: "Mission" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];
 
export function Navbar() {
  return (
    <header className="w-full border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <nav className="max-w-7xl mx-auto h-20 flex items-center justify-between">
        {/* Logo — far left */}
        <a href="/" className="flex-shrink-0">
          <img
            src={ciaoLogo}
            alt="Ciao"
            className="h-20 w-auto"
          />
        </a>
 
        {/* Nav tabs — center */}
        <ul className="flex items-center gap-1">
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
 
        {/* Right side — optional CTA slot */}
        <div className="flex-shrink-0 w-[120px] flex justify-end">
          {/* Add a button or auth control here if needed */}
        </div>
      </nav>
    </header>
  );
}

