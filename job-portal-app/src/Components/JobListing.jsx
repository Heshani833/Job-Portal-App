import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";

const JobListing = () => {
  const { searchFilter, isSearched } = useContext(AppContext);

  return (
    <div>
      <div>
        {isSearched && (searchFilter.title || searchFilter.location) ? (
          <div className="p-4 bg-gray-100 rounded-lg m-4">
            <h3 className="text-lg font-medium mb-2">Search Filters:</h3>
            <span>
              <p>{searchFilter.title && `Title: ${searchFilter.title}`}</p>
              <img
                className="cursor-pointer"
                src={assets.cross_icon}
                alt="cross-icon"
              />
            </span>
            <span>
              <p>
                {searchFilter.location && `Location: ${searchFilter.location}`}
                <img
                  className="cursor-pointer"
                  src={assets.cross_icon}
                  alt="cross-icon"
                />
              </p>
            </span>
          </div>
        ) : (
          <p className="p-4">No search filters applied.</p>
        )}
      </div>
    </div>
  );
};

export default JobListing;
