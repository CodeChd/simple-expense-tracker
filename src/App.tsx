import ExpenseFilter from "./expense-tracker/ExpenseFilter"
import ExpenseList from "./expense-tracker/ExpenseList"
import ExpenseForm from "./expense-tracker/ExpenseForm"
import {useState} from 'react'

function App() {
  
    const [selectedCategory,setSelectedCategory] = useState("")

    const [expenses, setExpenses] = useState([
      {id: 1, description: 'aaa', amount: 10, category: "utilities"},
      {id: 2, description: 'bbb', amount: 10, category: "utilities"},
      {id: 3, description: 'ccc', amount: 10, category: "entertainment"} ,
      {id: 4, description: 'ddd', amount: 10, category: "utilities"}
    ]) 

    const isCategory = selectedCategory ? expenses.filter((e) => e.category ===  selectedCategory.toLowerCase() ) : expenses 

  return ( 
    <main className="container">
    <ExpenseForm onSubmit={(data) => setExpenses([...expenses, {...data, id: expenses.length + 1}])}/>
      <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)}/>
      <ExpenseList expenses={isCategory} OnDelete={(id) => setExpenses(expenses.filter(data => data.id !== id))}/>
    </main>
  )
}

export default App
