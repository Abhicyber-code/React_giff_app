import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import { useState } from "react";

export const Tag = () => {
  const [tag, setTag] = useState("car");
  const { loading, fetchData, gif } = useGif(tag);

  return (
    <div className="App shadow-lg rounded-md mb-10 outline outline-2 flex flex-col items-center bg-green-300 w-[60%] m-auto ">
      <h1 className="mt-4 font-bold underline mb-4">RANDOM {tag} GIF</h1>
      {loading ? <Spinner /> : <img className="w-[50%]" src={gif} alt="logo" />}

      <input
        type="text"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
        className="mb-4 mt-10 w-[80%] outline outline-1 rounded-sm py-1 px-3"
      />

      <button
        onClick={() => fetchData(tag)}
        className="mb-5 mt-5 outline outline-1 rounded-sm py-1 px-3 bg-yellow-300"
      >
        Generate Tagged GIF
      </button>
    </div>
  );
};
