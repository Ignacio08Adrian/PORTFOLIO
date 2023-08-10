import { useState } from "react";
import "./App.css";
import Home from "./components/home/home";
import Habilidades from "./components/habilidades/habilidades";
import Estudios from "./components/estudios/estudios";
import Home2 from "./components/home2/home2";
import { ManualParallax } from "./components/manualparallax/manualparallax";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="background">
        <ManualParallax />
      </div>
    </>
  );
}

export default App;
