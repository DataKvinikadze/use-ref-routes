import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const refVar = useRef(0);

  const [click, setClick] = useState(0);
  const handleClick = () => {
    refVar.current += 1;
    // setClick(click + 1);
    console.log("use Ref : " + refVar.current);
  };

  return (
    <>
      <div>
        <p>Button Clicked {click} Times</p>
        <p>Normal Variable: {refVar.current}</p>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </>
  );
}

export default App;
