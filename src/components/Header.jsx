import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">
          <NavLink to="/">MySite</NavLink>
        </div>
        <nav className="flex space-x-4">
          <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
          <NavLink to="/about" className="hover:text-gray-400">About</NavLink>
          <NavLink to="/contact" className="hover:text-gray-400">Contact</NavLink>
        </nav>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded bg-gray-700 text-white placeholder-gray-400"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;