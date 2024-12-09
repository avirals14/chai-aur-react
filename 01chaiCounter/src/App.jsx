import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    setCounter(++counter)
  }
  const removeValue = () => {
    if(counter > 0) setCounter(--counter);
  }

  return (
    <>
      <h1>Chai Counter</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue} >Add</button>
      <button onClick={removeValue} >Remove</button>
    </>
  )
}

export default App