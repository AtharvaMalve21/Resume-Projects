import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const AppDownload = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto my-20">
      <div className="relative bg-gradient-to-r from-purple-100 to-blue-100 p-12 sm:p-20 lg:p-24 rounded-lg shadow-lg flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-2xl sm:text-4xl font-bold mb-6">
            Download Our Mobile App for a Better Experience
          </h1>
          <p className="text-gray-600 mb-6">
            Get access to exclusive features and a seamless experience on the
            go.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link>
              <img
                src={assets.play_store}
                alt="Google Play Store"
                className="w-40 hover:scale-105 transition transform duration-300"
              />
            </Link>
            <Link>
              <img
                src={assets.app_store}
                alt="Apple App Store"
                className="w-40 hover:scale-105 transition transform duration-300"
              />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="max-w-xs sm:max-w-md lg:max-w-lg">
          <img
            src={assets.app_main_img}
            alt="Mobile App"
            className="w-full drop-shadow-lg hover:scale-105 transition transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
