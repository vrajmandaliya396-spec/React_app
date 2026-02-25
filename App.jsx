import React, { useState } from 'react'

const App = () => {
    const [a,setA] = useState(0)
    const increment = () =>{
        setA(a+1)
    }
    const decrement = () =>{
        if (a > 0){
            setA(a-1)
        }else {
            setA(a)
        }

    }
  return (
    <div>
      <h1>{a}</h1>
      <button onClick={increment}>Incrementer</button>
        <button onClick={decrement}> Decrementer</button>

    </div>
  )
}

export default App
