import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const ref = useRef<HTMLInputElement>(null);
  const pointerScroll = (elem: HTMLInputElement) => {

    let isDrag = false;
    
    const dragStart = () => isDrag = true;
    const dragEnd = () => isDrag = false;
    const drag = (ev) => isDrag && (elem.scrollLeft -= ev.movementX);
    
    elem.addEventListener("pointerdown", dragStart);
    addEventListener("pointerup", dragEnd);
    addEventListener("pointermove", drag);
  };
  useEffect(()=>{
    ref.current && pointerScroll(ref.current)
  },[ref])

  return (
    <div className="flex flex-col items-start select-none">
      <div className="text-sm">Container</div>
      <div
        ref={ref}
        className="flex gap-3 items-center w-200 bg-amber overflow-auto"
        style={{touchAction: 'none'}}
      >
        {new Array(20).fill(0).map((_, index) => (
          <div
            key={index}
            className="w-35 h-35 flex flex-grow-0 flex-shrink-0 flex-col border-1 border-solid justify-center items-center bg-black"
          >
            <div>Title of {index}</div>
            <div className="w-20 h-20 bg-blue text-sm flex items-center justify-around">
              Title of {index}
            </div>
            <div className="justify-center text-sm">description</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
