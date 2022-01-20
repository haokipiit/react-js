>How functions are executed in react

...
function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
    </Card>
  );
}
...

the function Expenses of course returns something (JSX) in react;
here,
...
<ExpenseItem
  title={props.items[0].title}
  amount={props.items[0].amount}
  date={props.items[0].date}
/>
...
this <ExpenseItem/> is just like a function call / it act as a function call
So from here, the component ExpenseItem will be executed/call
And react runs everything only once at the start. This is how react displays things on the screen.

>STATE :

If we want to change anything after react has once runs everything, react has something called state that allows us to make changes in the program afterwards.

to use the react hook useState;

import React, { useState } from "react";

and call the useState(); inside the component function at the topmost scope. This useState() cannot be called inside a nested scope either.

useState() returns an array with two values. First value is the current state and the second value is a function to change the current value.

const [title, setTitle] = useState(props.title);

After calling the setTitle to change the current state value, react once again execute the component where there is a state change. The returned JSX is also evaluated again to check for changes.

The calling of setTitle() doesn't directly changes the state, instead it schedule the changes.

> Per component basis
...
<ExpenseItem
  title={props.items[0].title}
  amount={props.items[0].amount}
  date={props.items[0].date}
/>
<ExpenseItem
  title={props.items[1].title}
  amount={props.items[1].amount}
  date={props.items[1].date}
/>
<ExpenseItem
  title={props.items[2].title}
  amount={props.items[2].amount}
  date={props.items[2].date}
/>
...
If you change the state of (say) the first component, it doesn't affect the other two components. React independently manages the three components, even though they are same compononent re-use again and again. This is called per-component basis.

