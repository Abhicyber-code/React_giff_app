import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export const Random = () => {
  const { gif, fetchData, loading } = useGif();
  return (
    <div className="App outline outline-2 flex flex-col items-center shadow-lg rounded-md bg-blue-200 w-[60%] m-auto mb-12 ">
      <h1 className="mt-4 font-bold underline mb-4">RANDOM GIF</h1>
      {loading ? <Spinner /> : <img className="w-[50%]" src={gif} alt="logo" />}

      <button
        onClick={() => fetchData()}
        className="mb-5 mt-5 outline outline-1 rounded-sm py-1 px-3 bg-yellow-300"
      >
        Generate Random GIF
      </button>
    </div>
  );
};
