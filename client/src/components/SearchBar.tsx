import { useState } from "react";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="search-container">
      <input
        placeholder="Rechercher des séries..."
        aria-label="Rechercher des séries"
        className={`search-input ${isFocused ? "focused" : ""} text-black bg-white rounded-2xl px-4 py-2 w-full max-w-md mt-5`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button
        type="button"
        className="search-button bg-yellow text-primary p-2 rounded-full mt-3 cursor-pointer"
      >
        Parcourir
      </button>
    </div>
  );
};

export default SearchBar;
