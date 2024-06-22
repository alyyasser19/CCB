import React from "react";
import Logo from "../Logo";

function Footer() {
  return (
    <div className="mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-8 gap-4 mx-auto">
        <div className="flex flex-col flex-shrink-0 mb-5">
          <Logo />
          <div className="md:text-xl text-3xl">
            <span>Unlocking Excellence in </span>
            <span className="font-black	ccb-gradient">Pharmaceuticals </span>
            <span>and </span>
            <span className="font-black	ccb-gradient">Nutrition</span>
          </div>
          <p className="text-sm leading-none text-gray-800 mt-4 dark:text-white">
            Copyright © 2023 CCB
          </p>
          <p className="text-sm leading-none text-gray-800 mt-4 dark:text-white">
            All rights reserved
          </p>
        </div>
        <div className="sm:ml-0 md:ml-8 flex flex-col mb-5">
          <h2 className="text-base font-semibold leading-4 text-gray-800 dark:text-white">
            Quick Links
          </h2>
          <a
            href="/"
            className="focus:outline-none focus:underline hover:text-green-300 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
          >
            Home
          </a>
          <a
            href="#About"
            className="focus:outline-none focus:underline hover:text-green-300 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
          >
            About Us
          </a>
          <a
            href="#Services"
            className="focus:outline-none focus:underline hover:text-green-300 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
          >
            Services
          </a>
          <a
            href="#Contact"
            className="focus:outline-none focus:underline hover:text-green-300 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
          >
            Contact Us
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-base font-semibold leading-4 text-gray-800 dark:text-white">
            Locations
          </h2>
          <div className="space-y-2 gap-3 flex flex-col">
            <p className="text-lg leading-none text-gray-800 dark:text-white">
              Egypt Office:
            </p>
            <p className="text-sm leading-none text-gray-800 dark:text-white">
              Address: 34 Elsayed Elmargany St., Ground Floor, Heliopolis,
              Cairo, Egypt
            </p>
            <p className="text-sm leading-none text-gray-800 dark:text-white">
              Address: 1 Obour Buildings, Ground Floor App 5, Cairo, Egypt
            </p>
            <p className="text-sm leading-none text-gray-800 dark:text-white">
              Phone: [+20] 100 578 9499
            </p>
            <p className="text-sm leading-none text-gray-800 dark:text-white">
              Email: Yasser.hegazy@c-c-b-egypt.com
            </p>
          </div>
          <div className="space-y-2 gap-3 flex flex-col">
            <p className="text-lg leading-none text-gray-800 dark:text-white">
              UAE Office:
            </p>
            <p className="text-sm leading-none text-gray-800 dark:text-white">
              Shams, UAE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
