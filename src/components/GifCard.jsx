import { useState, useEffect } from "react";

const GifCard = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    requestTrendingGifs();
  }, []);

  async function requestTrendingGifs() {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY; //
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
    );
    const data = await res.json();
    const gifData = data.data;
    setGifs(gifData);
  }

  return (
    <div>
      {/*<button onClick={requestTrendingGifs}>Get Trending Gifs</button> */}
      <div>
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt="GIF" />
        ))}
      </div>
    </div>
  );
};

export default GifCard;
