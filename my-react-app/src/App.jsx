import { useState } from 'react'
import './App.css'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'
import ShoppingItem from './components/ShoppingItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <AddForm />
      <ShoppingList/>
      <ShoppingItem/>

    </main>
  )
}

export default App
