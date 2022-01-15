import "./App.css";

import ExpenseItem from "./components/ExpenseItem";
// we import a component so that we can use it here

function App() {
  // This is a component in react
  // Component in react is just a Javascript function
  return (
    <div className="App">
      <h1>This is a React Application</h1>
      <ExpenseItem />
      {/* Reusing components */}
      <ExpenseItem />
      <ExpenseItem />
      {/* Even though we use the same component here thrice, the state changes are managed independently by react. So changing the state for one component doesn't affect the states for other components - This is called per component instance basis */}
    </div>
  );
}
// The above code are known as JSX
// They are transform into more browser friendly code after our npm start

export default App;
// This file has to be exported to index.js
