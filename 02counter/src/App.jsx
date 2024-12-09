import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    setCounter(counter+1);
    console.log(counter);
  }
  const removeValue = () => {
    if(counter>0){setCounter(counter-1);
    console.log(counter);}
  }

  return (
    <>
    <h1>Chai Counter</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue} >Increase Value</button>
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
