import "./App.css";
import { Random } from "./Components/Random";
import { Tag } from "./Components/Tag";

function App() {
  return (
    <div className="background flex flex-col ">
      <h1 className="mb-8 mt-5 shadow-lg bg-white font-bold font-xl w-11/12 text-centre text-3xl mx-auto rounded-lg px-10 py-2 justify-content-center">
        GIFF GENERATOR APP
      </h1>
      <div className="flex flex-col ">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
