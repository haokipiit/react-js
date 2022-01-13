import React from "react";
import Expenses from "./Expenses";

function ExpenseItem() {
  // this is a component

  const expenses = [
    {
      name: "Julie",
      age: 12,
    },
    {
      name: "John",
      age: 23,
    },
    {
      name: "Matthew",
      age: 13,
    },
  ];

  return (
    <div>
      <Expenses name={expenses[0].name} age={expenses[0].age} />
      <Expenses name={expenses[1].name} age={expenses[1].age} />
      <Expenses name={expenses[2].name} age={expenses[2].age} />
    </div>
  );
}

export default ExpenseItem;
// We have to export the ExpenseItem component so that we can use it in the App.js component
// Components in react are connected by this way - export and import.
