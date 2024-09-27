import React, { useState } from "react";
import { Search } from "@mui/icons-material";

import logo from "../assets/logo.png";
interface NavbarProps {
  onSearch: (searchTerm: string) => void;
  onFilterBaseGames: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, onFilterBaseGames }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="rounded-sm cursor-pointer p-2 transition-colors duration-300 hover:bg-orange-500">
          <img src={logo} alt="logo" className="w-24 h-auto" />
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-64 px-4 py-2 pl-10 border-b border-gray-300 focus:border-red-500 focus:outline-none transition-colors duration-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            onClick={onFilterBaseGames}
            className="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition"
          >
            Base Games
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
