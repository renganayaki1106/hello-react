import React, { useState, useEffect } from "react";
import "./component.css";
const Counter = () => {
  const [count, setCount] = useState(0); // useState hook, used for maintain the state inside the component

  // arrow function to increment the count
  const increment = () => {
    setCount((prev) => prev + 1); // setCount is used to update the state
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const [history, setHistory] = useState([0]);
  const [index, setIndex] = useState(0);

  const currentCount = history[index];

  const increment1 = () => {
    const newCount = currentCount + 1;
    const updatedHistory = history.slice(0,index+1);
    setHistory([...updatedHistory, newCount]);
    setIndex(updatedHistory.length);
    console.log(updatedHistory, "increment");
  };

  const decrement1 = () => {
    const newCount = currentCount - 1;
    const updatedHistory = history.slice(0,index+1);
    setHistory([...updatedHistory, newCount]);
    setIndex(updatedHistory.length);
    console.log(updatedHistory, "decrement");
  };

  const undo = () => {
    if (index > 0) setIndex(index - 1);
    console.log(history, "undo");
  };

  const redo = () => {
    if (index < history.length - 1) setIndex(index + 1);
    console.log(history, "redo");
  };

  useEffect(() => {
    console.log("History updated:", history);
    console.log("Index updated:", index);
  }, [history, index]);

  return (
    <div className="all-app">
      <div style={{ padding: "20px" }}>
        <h1>Counter App</h1>
        <h3 className="count">{count}</h3>
        <button className="btn increment" onClick={increment}>
          Increment
        </button>
        <button className="btn decrement" onClick={decrement}>
          Decrement
        </button>
        <button className="btn reset" onClick={reset}>
          Reset
        </button>
      </div>

      <hr />

      <div style={{ padding: "20px" }}>
        <h1>Counter App with Undo/Redo</h1>
        <h3 className="count">{currentCount}</h3>
        <button className="btn increment" onClick={increment1}>
          Increment
        </button>
        <button className="btn decrement" onClick={decrement1}>
          Decrement
        </button>
        <button className="btn undo" onClick={undo} disabled={index === 0}>
          Undo
        </button>
        <button
          className="btn redo"
          onClick={redo}
          disabled={index === history.length - 1}
        >
          Redo
        </button>
      </div>
    </div>
  );
};

export default Counter;
