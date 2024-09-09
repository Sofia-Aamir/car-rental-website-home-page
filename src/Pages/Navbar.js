import React, { useState } from 'react';
import { FaSearch, FaHeart, FaBell, FaCog } from 'react-icons/fa';

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="w-full h-[80px] bg-white flex items-center justify-between px-4 md:px-8 lg:px-12 xl:px-16 border-b shadow-md">
      {/* Logo and Search Bar (hidden on small screens) */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className={`text-blue-500 text-2xl font-bold ${isSearchOpen && 'hidden md:block'}`}>
          MORENT
        </div>

        {/* Search Icon (visible on small screens) */}
        {isSearchOpen ? null : (
          <div className="md:hidden flex items-center" onClick={handleSearchToggle}>
            <FaSearch className="text-gray-600" />
          </div>
        )}

        {/* Search Bar and Filter Icon (hidden on small screens) */}
        <div className={`relative flex items-center ${isSearchOpen ? 'block' : 'hidden'} md:flex`}>
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" onClick={handleSearchToggle}>
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Search something here"
            className="pl-10 pr-16 py-1 border rounded-full border-gray-300 focus:outline-none focus:border-blue-500 w-full md:w-80 xl:w-96"
          />
          <img
            src="./images/filter.png"
            alt="Filter"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>
      </div>

      {/* Icons and Profile Image */}
      <div className={`flex items-center space-x-4 ${isSearchOpen && 'hidden md:flex'}`}>
        {/* Heart Icon */}
        <div className="p-2 border rounded-full border-gray-300 flex items-center justify-center">
          <FaHeart className="text-gray-600" />
        </div>
        {/* Notification Icon */}
<div className="p-2 border rounded-full border-gray-300 flex items-center justify-center relative">
  <FaBell className="text-gray-600" />
  <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
</div>
        {/* System Icon */}
        <div className="p-2 border rounded-full border-gray-300 flex items-center justify-center">
          <FaCog className="text-gray-600" />
        </div>
        {/* Profile Image */}
        <img
          src="./images/Profil.png"
          alt="Profile"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </div>
    </nav>
  );
}

export default Navbar;