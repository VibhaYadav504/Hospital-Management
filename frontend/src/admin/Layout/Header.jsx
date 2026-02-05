import React from "react";

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
      
      {/* Left */}
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-gray-800">
          Hospital Admin Panel
        </h1>
      </div>

      {/* Search */}
      <div className="flex-[2] hidden md:block">
        <input
          type="text"
          placeholder="Search patients, doctors, reports..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:outline-none"
        />
      </div>

      {/* Right */}
      <div className="flex-1 flex justify-end items-center gap-5">
        <button className="text-gray-600 hover:text-teal-600">🔔</button>
        <button className="text-gray-600 hover:text-teal-600">📧</button>

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://via.placeholder.com/32"
            alt="Admin"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700 hidden sm:block">
            Admin
          </span>
        </div>
      </div>

    </header>
  );
};

export default Header;
