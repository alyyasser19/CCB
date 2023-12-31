"use client";
import React from "react";
import Logo from "../Logo";
import Hamburger from "../Hamburger";

function Navbar() {
  return (
    <header className="bg-dark">
      <nav
        className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Logo />
          </a>
        </div>

        <div className="md:flex place-items-end gap-7 items-baseline hidden md:visible">
          <a
            href="#About"
            className="text-xl text-white hover:text-gray-300 hover:scale-110"
          >
            About us
          </a>
          <a
            href="#Services"
            className="text-xl text-white hover:text-gray-300 hover:scale-110"
          >
            Services
          </a>
          <a
            href="#Contact"
            className="text-xl text-white hover:text-gray-300 hover:scale-110"
          >
            Contact us
          </a>
        </div>

        <div className="visible md:hidden">
          <Hamburger />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
