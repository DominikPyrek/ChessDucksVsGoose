import "./App.css";
import { Button } from "./components/ui/button";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(1);
  function onClick() {
    setNum(num + 1);
  }
  return (
    <>
      <Button className="bg-black" onClick={onClick}>
        AAAAAAAa
      </Button>
      <p>{num}</p>
    </>
  );
}

export default App;
