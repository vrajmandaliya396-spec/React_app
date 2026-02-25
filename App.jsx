import React, { useState } from 'react'

const App = () => {
    const eventHandler = (e) =>{
        e.preventDefault()
    }

    const [username, setUsername] = useState("");
  return (
    <div>
      <form onSubmit={(e)=>{
        eventHandler(e)
        setUsername("")
      }}>
        <input 
        value={username}
        onChange={(e)=>{
            setUsername(e.target.value)
        }}
        type="text" />
        <button>Submiit</button>
      </form>
    </div>
  )
}

export default App










// import React, { useState } from 'react'

// const App = () => {
//     const [a,setA] = useState(0)
//     const increment = () =>{
//         setA(a+1)
//     }
//     const decrement = () =>{
//         if (a > 0){
//             setA(a-1)
//         }else {
//             setA(a)
//         }
//     }

//     const [username, setUsername] = useState("")
//     const eventHandler = (e) =>{
//         e.preventDefault()
//         console.log("hi")
//         console.log(e.target)
//     }

//   return (
//     <div>
//       <h1>{a}</h1>
//       <button onClick={increment}>Incrementer</button>
//         <button onClick={decrement}> Decrementer</button>
//         <form onSubmit={(e)=>{
//                 eventHandler(e)
//         }}>
//             <input 
//             value={(e)=>{
//                 setUsername = e.target.value;
//             }}
            
//             type="text" />
//             <button>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default App
