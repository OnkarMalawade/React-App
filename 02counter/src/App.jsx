import { useState } from 'react'
import './App.css'

function App() {

  // let count = 0

// const [variable , updateFuntion()]  =  useState(initial value)
  const [count, setCount] = useState(0)
  const addValue = () => {
    setCount( count + 1 )
  }

  const removeValue = () => {
    if(count > 0)
    {
      setCount(count - 1);
    }
    else{
      alert("Value cannot be negative")
    }
  }
  /*

  let [counter , setCount] = useState(11)

  const addValue = () => {
    counter = couter + 1
    setCount(counter)
  }

  */

  return (
    <>
      <h1>
        Chai aur React
      </h1>

      <h2>
        Counter : {count}
      </h2>

      <button onClick={ addValue }>Add Value to {count}</button>
      <br/>
      <button onClick={ removeValue }>Remove Value {count}</button>

      <p>Footer : {count}</p>
    </>
  )
}

export default App
