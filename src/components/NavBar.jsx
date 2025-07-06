import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../img/personal-logo-nobg.png";

const navItems = [
  { to: "/", label: "about", end: true },
  { to: "/projects", label: "projects" },
  { to: "/contact", label: "contact" },
];

const NavBar = () => {
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    // Find the active nav item
    const activeIndex = navItems.findIndex(item =>
      item.end
        ? location.pathname === item.to
        : location.pathname.startsWith(item.to)
    );
    const activeRef = navRefs.current[activeIndex];
    if (activeRef) {
      setUnderlineStyle({
        left: activeRef.offsetLeft,
        width: activeRef.offsetWidth,
        opacity: 1,
      });
    } else {
      setUnderlineStyle({ opacity: 0 });
    }
  }, [location.pathname]);

  return (
    <>
      <div className="hidden md:flex justify-center items-center align-middle bg-neutral-900/30 backdrop-blur-md fixed  p-4 px-8 rounded-full z-10 top-6 left-32 transform -translate-x-1/2">
        <img src={logo} alt="avatar" className="w-10 h-6 rounded-full" />
      </div>

      <nav className="flex justify-center items-center align-middle rounded-full w-auto max-w-2xl p-4 px-8 bg-neutral-900/30 backdrop-blur-md text-white fixed top-6 left-1/2 transform -translate-x-1/2 z-100">
        <div className="relative w-full">
          <ul className="flex gap-6 text-xl items-center relative mb-1.5">
            {navItems.map((item, idx) => (
              <li key={item.to} ref={el => (navRefs.current[idx] = el)}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    "px-2 py-1 transition-colors duration-300 ease-in-out " +
                    (isActive ? "text-mustard" : "hover:text-mustard")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Animated Underline */}
          <span
            className="absolute bottom-0 h-0.5 bg-mustard rounded transition-all duration-300"
            style={{
              ...underlineStyle,
              position: "absolute",
              transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;