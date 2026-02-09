import { useState } from 'react'
import './App.css'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'

function App() {

        const shoppingItems = [
        {
            id: 0,
            title: "Melk"
        },
        {
            id: 1,
            title: "Egg"
        }
    ]
  const [shoppingList, setshoppingList] = useState(shoppingItems)


  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm />
      <ShoppingList ShoppingItem={ShoppingItem}/>
      <ShoppingItem/>

    </main>
  )
}

export default App
