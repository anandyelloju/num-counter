import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-gradient-to-br from-blue-100 to-purple-100">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 text-center">
        NumCounter <br /><br /> {count}
      </h1>
      <div className="space-x-4">
        <button
          onClick={decrement}
          className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded shadow-lg transition duration-300"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded shadow-lg transition duration-300"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded shadow-lg transition duration-300"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
