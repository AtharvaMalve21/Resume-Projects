import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      {/* Gradient Border Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>

      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:justify-between text-center lg:text-left space-y-6 lg:space-y-0">
        {/* Left Section - Logo & Copyright */}
        <div className="space-y-4">
          <img src={assets.logo} alt="Logo" className="w-32 mx-auto lg:mx-0" />
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AtharvaMalve | All rights
            reserved.
          </p>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-300">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-white transition">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#">About</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#">Careers</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Icons with Glassmorphism */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-300">Follow Us</h3>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="#"
              className="p-2 rounded-full bg-white bg-opacity-10 backdrop-blur-md transition-transform hover:scale-110"
            >
              <img src={assets.facebook_icon} alt="Facebook" className="w-6" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white bg-opacity-10 backdrop-blur-md transition-transform hover:scale-110"
            >
              <img src={assets.twitter_icon} alt="Twitter" className="w-6" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white bg-opacity-10 backdrop-blur-md transition-transform hover:scale-110"
            >
              <img
                src={assets.instagram_icon}
                alt="Instagram"
                className="w-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
