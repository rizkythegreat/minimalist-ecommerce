import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8" />
            <span className="ml-2 text-xl font-semibold">MinimalStore</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-black">Home</a>
            <a href="#shop" className="text-gray-700 hover:text-black">Shop</a>
            <a href="#products" className="text-gray-700 hover:text-black">Products</a>
            <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-black">Home</a>
            <a href="#shop" className="block px-3 py-2 text-gray-700 hover:text-black">Shop</a>
            <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-black">Products</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-black">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;