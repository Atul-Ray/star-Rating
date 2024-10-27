import { useState } from "react";
import Accordion from "./Compoent/accordion";

function App() {
  return (
    <>
     
      <div className="w-screen h-screen flex justify-center items-center  ">
      <div className="w-3/4 h-4/5 max-[600px]:w-full  rounded-lg overflow-hidden  bg-slate-950 ">  

      <Accordion />
      </div>
      </div>
    </>
  );
}

export default App;
