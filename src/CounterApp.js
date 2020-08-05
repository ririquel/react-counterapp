import React, { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  //handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter((c) => c + 1);
  };
  const handleSubtract = () => setCounter(counter - 1);

  // console.log(counter);
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={() => setCounter(value)}>Resset</button>
      <button onClick={handleSubtract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
