import "./App.css";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function decreaseHandler(){
      setCount(count-1);
  }

  function increseHandler(){
      setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    // <main class="flex justify-center gap-4 flex-col min-h-screen">
    //   <h1 class="text-3xl text-center font-bold underline">React & Tailwind CSS Starter Pack</h1>
    //   <p class="text-center text-xl">This is a starter pack for React & Tailwind CSS projects.</p>
    //   <img src="https://bit.ly/3wsmzTy" alt="meme" class="mx-auto" />
    // </main>


    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      {/* heading */}

      <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>

      <div className="bg-white flex justify-center items-center gap-10 py-3 rounded-sm text-[25px] text-[#344151]">

        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
        
        <div className="font-bold gap-12 text-5xl">{count}</div>

        <button onClick={increseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>

      </div>

      <button onClick={resetHandler} className="bg-[#0398d4] font-white px-5 py-2 rounded-sm text-lg">Reset</button>

    </div>
  );
}

export default App;
