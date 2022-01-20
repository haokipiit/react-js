import React, {useState} from "react";
// useState is a react hook
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem (props) {

  //state hook
  const [title, setTitle] = useState(props.title);
  // first value : title is a pointer to the initial value and the current value.
  // second value is a function to change the title value 

  // Event handling
  const clickHandler = () => {
    // it is good to end the name of the function with Handler for any event handler
    console.log("Clicked!");
    // so to make any changes in the state, we called the setTitle function
    setTitle("Updated!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      {/* whenever this button is clicked, it points to the clickHandler function - the clickHandler function is executed */}
    </Card>
  );
}

export default ExpenseItem;
