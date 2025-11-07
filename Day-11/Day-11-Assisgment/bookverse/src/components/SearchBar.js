import React from "react";

// Simple functional component for the search input and focus button
// Uses ref (passed from parent) for uncontrolled input behavior
const SearchBar = ({
  searchInputRef,
  onFocusClick,
  onSearchChange,
  searchQuery,
}) => {
  return (
    <div className="d-flex justify-content-center mb-4">
      {/* Search Input Field */}
      <input
        type="text"
        ref={searchInputRef}
        placeholder="Search books or authors..."
        className="form-control w-50"
        value={searchQuery}
        onChange={onSearchChange}
      />

      {/* Focus button (uses ref to focus input) */}
      <button className="btn btn-primary ms-2" onClick={onFocusClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
