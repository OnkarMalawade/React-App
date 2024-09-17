import { useState } from "react"
import Chai from "./chai"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chai />
      <h1>Chai Aur React : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default App
