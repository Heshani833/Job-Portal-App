import React from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <div className="shadow py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img src={assets.logo} alt="logo" className="h-8 w-auto" />
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-800 transition-colors duration-200 px-3 py-1 rounded">
            Recruiter Login
          </button>

          {isSignedIn ? (
            <div className="flex items-center gap-2">
              <span className="text-gray-700">
                Hello, {user?.firstName || "User"}
              </span>
              <UserButton />
            </div>
          ) : (
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-200 shadow-sm"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
