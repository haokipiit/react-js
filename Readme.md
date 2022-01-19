Adding Javascript logics to the components
Splitting components into multiple components
The concept of composition - props.children

<Card className='expense-item'>
  <ExpenseDate date={props.date} />
  <div className='expense-item__description'>
    <h2>{props.title}</h2>
    <div className='expense-item__price'>${props.amount}</div>
  </div>
</Card>

We created a Card component that can be used to wrap any component with a card style.
We can wrap the whole JSX code that we want it to be inside a card

//react.CreateElement()
return (
  <div>
    <Expenses items={expenses} />
  </div>
);

For the return statement, there is an alternative

return React.createElement(
  "div",
  React.createElement(Expenses, { items: expenses })
);

This is the actual thing happening in the background.

