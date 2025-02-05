import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"

export const Navbar = () => {
  const location = useLocation();
  const [ismenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 right-0 md:rounded-bl-3xl md:rounded-tr-3xl bg-[#2b2b2c] flex flex-col md:flex-row justify-center items-center md:gap-8 h-16 w-full md:w-[456px] font-semibold">
      <button 
        onClick={() => setIsMenuOpen(!ismenuOpen)}
        className="md:hidden absolute right-4 top-4 text-white p-2 z-50 hover:bg-[#3d3d3d] rounded-lg transition-colors"
      >
        {ismenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div 
        className={`
          fixed md:static top-0 left-0 w-full h-[400px] md:h-auto
          bg-[#2b2b2c] md:bg-transparent
          flex flex-col md:flex-row items-center justify-center
          gap-8 md:gap-8 
          transition-transform duration-300 ease-in-out
          ${ismenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <NavLink
          to="/about"
          onClick={() => setIsMenuOpen(false)}
          className={`text-2xl md:text-base 
            ${location.pathname === "/about" || location.pathname === "/" 
              ? "text-[#ffbb5c]" 
              : "text-white hover:text-[#b3b3b3]"}
            transition-colors duration-200`
          }>
          About
        </NavLink>
        <NavLink
          to="/skill"
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>
            `text-2xl md:text-base ${isActive ? "text-[#ffbb5c]" : "text-white hover:text-[#b3b3b3]"}
             transition-colors duration-200`
          }>
          Skills
        </NavLink>
        <NavLink
          to="/experience"
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>
            `text-2xl md:text-base ${isActive ? "text-[#ffbb5c]" : "text-white hover:text-[#b3b3b3]"}
             transition-colors duration-200`
          }>
          Experience
        </NavLink>
        <NavLink
          to="/projects"
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>
            `text-2xl md:text-base ${isActive ? "text-[#ffbb5c]" : "text-white hover:text-[#b3b3b3]"}
             transition-colors duration-200`
          }>
          Projects
        </NavLink>
      </div>
    </nav>
  );
}