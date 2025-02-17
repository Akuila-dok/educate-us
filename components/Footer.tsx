import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r mb-14 from-blue-50 to-green-50  overflow-hidden py-6 px-8 shadow-md text-center">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-xl"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Separator */}
        <div className="w-24 border-t border-gray-400 mb-3"></div>

        {/* Rights Statement */}
        <p className="text-gray-400 text-sm font-[Ubuntu]">
          © {new Date().getFullYear()} All Rights Reserved | <span className="font-medium">Educate Us Initiative</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
