import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 1, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 114.02,
      date: new Date(2022, 1, 15),
    },
    {
      id: "e3",
      title: "New Desk",
      amount: 13.23,
      date: new Date(2022, 1, 3),
    },
  ];

  return (
    <div className="App">
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      {/* Reusing the component */}
    </div>
  );
}

export default App;
