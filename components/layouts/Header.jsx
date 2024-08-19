"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import logo from "@/public/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    {
      name: "About Us",
      href: "#",
      subMenu: [
        { name: "Our Team", href: "#" },
        { name: "Our History", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    { name: "Services", href: "#" },
    { name: "Medical Data Flow", href: "/medical" },
    { name: "AI Labs", href: "/labs" },
    { name: "R&D", href: "/rnd" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "#" },
  ];

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown")) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white py-5">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-10">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-black text-xl font-bold">
              <Image alt="Logo" width={150} height={100} src={logo} />
            </a>
          </div>
          <div className="hidden md:flex space-x-4 border border-gray-500 rounded-full px-4">
            {navItems.map((item) =>
              item.subMenu ? (
                <div key={item.name} className="relative dropdown">
                  <button
                    onClick={handleDropdownClick}
                    className="flex items-center text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                    <FaCaretDown
                      className={`ml-1 transition-transform duration-200 ${
                        dropdownOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                      {item.subMenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              )
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) =>
            item.subMenu ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-black hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item.name}
                </button>
                {dropdownOpen && (
                  <div className="bg-gray-800">
                    {item.subMenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-black hover:bg-gray-300 rounded-md"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-black hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
