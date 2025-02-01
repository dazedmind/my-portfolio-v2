import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import FaTimes for closing
import headerImg from "../img/agfx-chr.png"; // Replace with actual path

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-8 sm:px-16 bg-neutral-900 text-white fixed top-0 w-full z-50">
      {/* LOGO */}
      <span className="flex items-center gap-3">
        <img src={headerImg} alt="Logo" className="w-10" />
        <h1 className="text-2xl md:text-3xl font-bold">AllenGFX</h1>
      </span>

      {/* Desktop NAVBAR */}
      <ul className="hidden md:flex gap-11 text-xl items-center">
        <li>
          <a href="/" className="hover:text-mustard hover:underline underline-offset-8">
            about
          </a>
        </li>
        <li>
          <Link to="/projects" className="hover:text-mustard hover:underline underline-offset-8">
            projects
          </Link>
        </li>
      </ul>

      {/* MOBILE MENU ICON */}
      <div className="md:hidden">
        {isOpen ? (
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
        ) : (
          <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <ul className="absolute top-20 left-0 w-full bg-neutral-900 text-white flex flex-col items-center gap-6 py-6 text-xl md:hidden">
          <li>
            <a href="/" className="hover:text-mustard hover:underline underline-offset-8" onClick={toggleMenu}>
              about
            </a>
          </li>
          <li>
            <Link to="/projects" className="hover:text-mustard hover:underline underline-offset-8" onClick={toggleMenu}>
              projects
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
