import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between py-2 shadow bg-black mx-auto">
      <h2 className="text-2xl font-bold font-sans text-white bg-[#1B3E80] p-3 ml-16">
        BMW
      </h2>
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      <ul
        className={`md:flex justify-center items-center space-x-8 mr-10 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link to="/" className="text-white hover:text-[#1B3E80] block py-2">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white hover:text-[#1B3E80] block py-2"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/designs"
            className="text-white hover:text-[#1B3E80] block py-2"
          >
            Designs
          </Link>
        </li>
        <li>
          <Link
            to="/pricing"
            className="text-[#367CFF] hover:text-[#1B3E80] border hover:border-white  px-6 mr-20 pb-2 block"
          >
            Pricing
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
