import { useState } from "react";
import ColorGenerator from "./Compoent/colorGenerator";

function App() {
  return (
    <>
     <div className="h-screen w-screen bg-slate-300 flex justify-center items-center">
       <ColorGenerator/>
     </div>
      
    </>
  );
}

export default App;
