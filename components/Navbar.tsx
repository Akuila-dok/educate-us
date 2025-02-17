"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Home, Activity, Info, Phone } from "lucide-react";

function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Top Navbar (Desktop) */}
      <nav className="bg-white shadow-md font-ubuntu text-3xl w-full fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center py-5">
          {/* NGO Name - Left */}
          <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide font-ubuntu">
            EDUCATE US INITIATIVE
          </h1>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className={`text-lg font-medium transition ${
                pathname === "/" ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-500"
              }`}
            >
              Home
            </a>
            <a
              href="/activities"
              className={`text-lg font-medium transition ${
                pathname === "/activities" ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-500"
              }`}
            >
              Activities
            </a>
            <a
              href="/about"
              className={`text-lg font-medium transition ${
                pathname === "/about" ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-500"
              }`}
            >
              About Us
            </a>
            <a
              href="/contact"
              className={`text-lg font-medium transition ${
                pathname === "/contact" ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-500"
              }`}
            >
              Contact Us
            </a>
            {/* Donate Button -> GoFundMe */}
            <a
              href="https://www.gofundme.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white text-lg px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Donate
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation (Mobile) */}
      <div className="fixed bottom-0 left-0 w-full bg-white text-xl shadow-md border-t flex justify-around py-3 md:hidden">
        <a href="/" className={`flex flex-col items-center ${pathname === "/" ? "text-blue-600 font-bold" : "text-gray-600 hover:text-blue-500"}`}>
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium">Home</span>
        </a>
        <a href="/activities" className={`flex flex-col items-center ${pathname === "/activities" ? "text-blue-600 font-bold" : "text-gray-600 hover:text-blue-500"}`}>
          <Activity className="w-6 h-6" />
          <span className="text-xs font-medium">Activities</span>
        </a>
        <a href="/about" className={`flex flex-col items-center ${pathname === "/about" ? "text-blue-600 font-bold" : "text-gray-600 hover:text-blue-500"}`}>
          <Info className="w-6 h-6" />
          <span className="text-xs font-medium">About</span>
        </a>
        <a href="/contact" className={`flex flex-col items-center ${pathname === "/contact" ? "text-blue-600 font-bold" : "text-gray-600 hover:text-blue-500"}`}>
          <Phone className="w-6 h-6" />
          <span className="text-xs font-medium">Contact</span>
        </a>
      </div>
    </>
  );
}

export default Navbar;
