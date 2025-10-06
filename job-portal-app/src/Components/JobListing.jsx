import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const JobListing = () => {
  const { searchFilter, isSearched } = useContext(AppContext);

  return (
    <div>
      {/* side bar */}
      <div>
        {/* search filter from hero components */}
        {isSearched && (searchFilter.title || searchFilter.location) ? (
          <div className="p-4 bg-gray-100 rounded-lg m-4">
            <h3 className="text-lg font-medium mb-2">Search Filters:</h3>
            <p>{searchFilter.title && `Title: ${searchFilter.title}`}</p>
            <p>
              {searchFilter.location && `Location: ${searchFilter.location}`}
            </p>
          </div>
        ) : (
          <p className="p-4">No search filters applied.</p>
        )}
      </div>
    </div>
  );
};

export default JobListing;
