import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user, isLoaded } = useUser();

  console.log("Clerk loaded:", isLoaded);
  console.log("User:", user);
  console.log("OpenSignIn function:", typeof openSignIn);

  const handleLogin = () => {
    console.log("Login button clicked");
    try {
      openSignIn();
    } catch (error) {
      console.error("Error opening sign in:", error);
    }
  };

  return (
    <div className="shadow py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img src={assets.logo} alt="logo" className="h-8 w-auto" />
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Link
                to="/application"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200 px-3 py-1 rounded"
              >
                Applied Jobs
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-700">
                Hi, {user.firstName + " " + user.lastName}
              </span>
              <UserButton />
            </div>
          ) : (
            <>
              <button className="text-gray-600 hover:text-gray-800 transition-colors duration-200 px-3 py-1 rounded">
                Recruiter Login
              </button>
              <button
                onClick={handleLogin}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-200 shadow-sm"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
