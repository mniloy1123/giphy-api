import { useState } from "react";

function SearchField() {
  const [search, setSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function requestSearchGifs() {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`
    );
    const data = await res.json();
    const gifData = data.data;
    setSearch(gifData);
  }
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search Gifs"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="searchButton" onClick={requestSearchGifs}>
        Search
      </button>
      <div>
        {search.map((gif) => (
          <img
            key={`search-field-${gif.id}`}
            src={gif.images.fixed_height.url}
            alt="GIF"
          />
        ))}
      </div>
    </div>
  );
}

export default SearchField;
