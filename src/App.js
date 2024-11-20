import ExpenseItem from "./components/Expenseitem";

function App() {
const EXPENSE_DATE =[
  {
    id: 'el1',
    title: 'Car Insurance',
    amount: 200,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'el2',
    title: 'Kinder Garden',
    amount: 150,
    date: new Date(2022, 5, 30)
  },
  {
    id: 'el3',
    title: 'Utilities',
    amount: 100,
    date: new Date(2023, 6, 12)
  },
  {
    id: 'el4',
    title: 'Toilet paper',
    amount: 2,
    date: new Date(2024, 7, 12)
  }
]





  return (
    <div>
      <ExpenseItem expenses = {EXPENSE_DATE[0]}/>
      <ExpenseItem expenses = {EXPENSE_DATE[1]}/>
      <ExpenseItem expenses = {EXPENSE_DATE[2]}/>
      <ExpenseItem expenses = {EXPENSE_DATE[3]}/>
    </div>
  );
}

export default App;
