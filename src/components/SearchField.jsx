import { useState } from "react";
import PropTypes from "prop-types"; //for eslint validation
import HomeIcon from "@mui/icons-material/Home";

const SearchField = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rating, setRating] = useState("");
  const [language, setLanguage] = useState("");

  const handleHomeClick = () => {
    window.location.reload(); // Reload the page
  };

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim();
    if (trimmedSearchTerm) {
      onSearch(trimmedSearchTerm, rating, language);
    }
  };

  return (
    <div className="container">
      <HomeIcon
        color="secondary"
        fontSize="large"
        onClick={handleHomeClick}
        style={{ cursor: "pointer" }}
      />
      <input
        className="searchBar"
        type="text"
        placeholder="Search Gifs"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="searchButton" onClick={handleSearch}>
        Search
      </button>
      <select
        className="filters"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="">All Ratings</option>
        <option value="g">G</option>
        <option value="pg">PG</option>
        <option value="pg-13">PG-13</option>
        <option value="r">R</option>
      </select>
      <select
        className="filters"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="">All Languages</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bengali</option>
        <option value="ru">Russian</option>
        <option value="ja">Japanese</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
  );
};
//ensuring that the onSearch prop is a function
SearchField.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchField;
