import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* A javascript can be added inside here using the curly brace */}
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
