"use client";

import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { label: "Home", hasDropdown: false },
    { label: "Clients", hasDropdown: true },
    { label: "Services", hasDropdown: true },
    { label: "Projects", hasDropdown: true },
    { label: "About", hasDropdown: true },
    { label: "Contact", hasDropdown: false },
  ];

  return (
    <header className="w-full relative z-20">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 md:h-20 lg:h-24 gap-8 lg:gap-12 xl:gap-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/Logo-Lift-2022-B.png"
              alt="Logo"
              width={120}
              height={60}
              className="h-8 md:h-12 lg:h-16 w-auto object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item.label);
                }}
                className={`text-white hover:text-gray-300 transition-colors text-sm xl:text-base font-medium flex items-center gap-1 ${
                  activeItem === item.label ? 'underline decoration-white underline-offset-4' : ''
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="pb-4">
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-white hover:text-gray-300 transition-colors text-base font-medium flex items-center justify-between ${
                    activeItem === item.label ? 'underline decoration-white underline-offset-4' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem(item.label);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

