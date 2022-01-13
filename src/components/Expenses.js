import React from "react";

function Expenses(props) {
  let name = props.name,
    age = props.age;

  // Event handling
  const clickHandler = () => {
    // name = "Julie";
    // age = 34;
    console.log(name, age);
  };

  return (
    <div>
      <h1>Student</h1>
      <h3>Name: {name}</h3>
      <h3>Age : {age} years old.</h3>
      <button onClick={clickHandler}>Change Date</button>
    </div>
  );
}

export default Expenses;
