import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Over 1000+ Job Listings
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Find your dream job today!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto px-4">
          <div className="flex items-center bg-white rounded-lg text-gray-600 w-full sm:max-w-md">
            <div className="pl-4 pr-2">
              <img
                src={assets.search_icon}
                alt="search_icon"
                className="w-5 h-5"
              />
            </div>
            <input
              type="text"
              placeholder="Search for jobs..."
              className="p-3 rounded-lg outline-none w-full text-sm"
            />
          </div>

          <div className="flex items-center bg-white rounded-lg text-gray-600 w-full sm:max-w-md">
            <div className="pl-4 pr-2">
              <img
                src={assets.location_icon}
                alt="location_icon"
                className="w-5 h-5"
              />
            </div>
            <input
              type="text"
              placeholder="Location"
              className="p-3 rounded-lg outline-none w-full text-sm"
            />
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-200 shadow-sm font-medium w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>
      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex ">
        <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
          <p className="font-medium">Trusted by</p>
          <img className="h-6" src={assets.microsoft_logo} alt="" />
          <img className="h-6" src={assets.walmart_logo} alt="" />
          <img className="h-6" src={assets.accenture_logo} alt="" />
          <img className="h-6" src={assets.samsung_logo} alt="" />
          <img className="h-6" src={assets.amazon_logo} alt="" />
          <img className="h-6" src={assets.adobe_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
