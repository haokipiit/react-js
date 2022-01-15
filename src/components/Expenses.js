import React from "react";
import { useState } from "react";
// the useState is a function provided by react library
// it allows us to define values as state, where changes to this value should reflect the component function being  call again.
// IT SHOULD BE CALL INSIDE THE COMPONENT, TOP MOST SCOPE INSIDE THE FUNCTION. IT CANNOT BE PASSED OUTSIDE THE COMPONENT FUNCTION OR INSIDE NESTED FUNCTION.

function Expenses(props) {
  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);
  // useState always returns two value - first current value/state and second function to set/change the current value/state

  // Event handling
  const clickHandler = () => {
    setName("Martha");
    setAge(22);
    // whenever we called this setFunctions, it not only change the current state/value but the component function where we called is called/executed again.
  };
  // Note that this type of event has no effect. React does not even care!
  // React has its own state

  return (
    <div>
      <h1>Student</h1>
      <h3>Name: {name}</h3>
      <h3>Age : {age} years old.</h3>
      <button onClick={clickHandler}>Change</button>
    </div>
  );
}

export default Expenses;
