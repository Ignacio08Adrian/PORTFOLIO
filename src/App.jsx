import { useState } from "react";
import "./App.css";
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
