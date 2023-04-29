import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("You clicked"); //run useEffect every refresh
  }, [count]);

  return (
    <>
      <h1 className="text-center text-5xl font-bold">useEffect</h1>
      <h3 className="text-center text-4xl mt-5 font-bold">{count}</h3>
      <div className="flex justify-center mt-10 space-x-2">
        <button
          onClick={() => setCount((num) => num + 1)}
          className="bg-green-500 px-5 py-3 rounded-lg "
        >
          Increase Count
        </button>
        <button
          onClick={() => setCount((num) => num - 1)}
          className="bg-red-500 px-5 py-3 rounded-lg "
        >
          Decrease Count
        </button>
      </div>
    </>
  );
};

export default App;
