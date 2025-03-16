import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15)
  // let counter = 5
  // let [counter , updatecounter] = useState(15)

  const addvalue = () => {
    // console.log(counter)
    if(counter >= 20){ 
         setcounter(20)
    }
    else{
      setcounter(counter + 1)
    }
  }

  const removevalue = () => {
    if (counter == 0) {
      setcounter(0)
    }
    else {
        setcounter(counter - 1)
    }

  }

  return (
    <>
      <h1>prince aur code</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addvalue}>add value</button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
