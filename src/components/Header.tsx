import React from "react";
import { Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/credly.svg" alt="Credly Logo" className="h-15 ml-20" />

            {/* <a href="/" className="text-2xl font-bold text-gray-900">
              Credly
            </a> */}
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Discover badges, skills or organizations"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <button className="border border-teal-900 text-teal-900 px-4 py-1 rounded-md hover:bg-gray-100">
                Create Account
              </button>
              <button className="bg-teal-900 text-white px-4 py-1 rounded-md hover:bg-teal-800">
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
