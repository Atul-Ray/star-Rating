import { useState } from "react";
import { quote } from "../data/data";

export default function Accordion() {
  const [selected, setSelected] = useState([]);
  const [multiple, setMultiple] = useState(false);

  function handleclick(id) {
    if (multiple) {
      setSelected(prev=>
        prev.includes(id)?prev.filter(item=>item!=id):
        [...prev,id]
      );
    } else {
      setSelected(selected.includes(id) ? [] : [id]);
    }
  }

  function handlemultipleAccordion() {
    setMultiple(!multiple);
    setSelected([]);
  }

  return (
    <>
      <div className="flex justify-center mt-2 ">
        <button
          className="p-2 rounded-lg font-semibold hover:bg-slate-500 bg-slate-600  "
          onClick={() => handlemultipleAccordion()}
        >
          Multiple Accordion
        </button>
      </div>

      {quote.map((data, index) => {
        return (
          <div
            key={index}
            className="max-w-full bold font-bold  bg-slate-500 min-[600px]:flex m-4 rounded-md flex-wrap max-[600px]:grid grid-cols-3"
          >
            <div className="bg-slate-100 col-span-2 max-[600px]:w-3/4 p-3 min-[600px]:w-4/5">
              {data.author}
            </div>
            <span
              className=" px-12 pt-2 rounded-lg col-span-1 hover:bg-slate-400"
              onClick={() => handleclick(data.id)}
            >
              +
            </span>
            {selected.includes(data.id) ? (
              <div className="bg-slate-200 w-full col-span-3 p-3">
                {" "}
                {data.quote}{" "}
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
}
