import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { assets, JobCategories } from "../assets/assets";

const JobListing = () => {
  const { searchFilter, isSearched, setSearchFilter } = useContext(AppContext);

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row gap-6 py-6">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white px-4 py-6 rounded-lg shadow-sm">
        {isSearched && (searchFilter.title || searchFilter.location) ? (
          <div className="p-4 bg-gray-100 rounded-lg mb-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Search Filters:
            </h3>
            <div className="flex flex-col gap-2">
              {searchFilter.title && (
                <div className="inline-flex items-center justify-between gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-3 py-2 rounded-full">
                  <span className="text-sm font-medium">
                    Title: {searchFilter.title}
                  </span>
                  <img
                    onClick={() =>
                      setSearchFilter((prev) => ({ ...prev, title: "" }))
                    }
                    className="cursor-pointer w-4 h-4 hover:opacity-70 transition-opacity"
                    src={assets.cross_icon}
                    alt="Remove title filter"
                  />
                </div>
              )}
              {searchFilter.location && (
                <div className="inline-flex items-center justify-between gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-3 py-2 rounded-full">
                  <span className="text-sm font-medium">
                    Location: {searchFilter.location}
                  </span>
                  <img
                    onClick={() =>
                      setSearchFilter((prev) => ({ ...prev, location: "" }))
                    }
                    className="cursor-pointer w-4 h-4 hover:opacity-70 transition-opacity"
                    src={assets.cross_icon}
                    alt="Remove location filter"
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600 text-center">
              No search filters applied.
            </p>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-sm">
        {/* Job listings will go here */}
        <div className="p-6">
          <p className="text-gray-500 text-center">
            Job listings will be displayed here.
          </p>
        </div>
        {/* category filter */}
        <h4>Search by Category</h4>
        <ul>
          {JobCategories.map((category, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={category}
                name={category}
                value={category}
              />
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobListing;
