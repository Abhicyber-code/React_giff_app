import axios from "axios";
import React, { useEffect, useState } from "react";

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchData(tag) {
    console.log(tag);
    setLoading(true);
    const API_KEY = "sexqpDICNpyzfTH5KWr9a9xHITerIIIU";
    const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(tag ? tagurl : randomurl);
    const image = data.data.images.downsized_large.url;
    setGif(image);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData, tag };
};

export default useGif;
