import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Container</div>
      <div className="flex">
        {new Array(20).fill(0).map((_, index) => (
          <div key={index} className="w-50 h-50 flex flex-col">
            <div className="w-20 h-20 bg-blue">Title of {index}</div>
            <div>Title of {index}</div>
            {index}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
