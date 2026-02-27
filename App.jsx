import React, { use } from 'react'
import Card from './Card'
import { element } from 'three/tsl'

const App = () => {
  const a = 10

  const user = [
    {
      "name": "Rahul Sharma",
      "age": 25,
      "profession": "Software Developer",
      "profilePhoto": "C:/Users/vrajm/First_Project/src/assets/user.png"
    },
    {
      "name": "Priya Patel",
      "age": 28,
      "profession": "Graphic Designer",
      "profilePhoto": "images/priya.jpg"
    },
    {
      "name": "Amit Verma",
      "age": 30,
      "profession": "Project Manager",
      "profilePhoto": "images/amit.jpg"
    },
    {
      "name": "Neha Singh",
      "age": 24,
      "profession": "Frontend Developer",
      "profilePhoto": "images/neha.jpg"
    }
  ]


  
  return (
     user.map((elem)=>{
      return <Card img={elem.profilePhoto} username={elem.name} Profestion={elem.profession} age={elem.age}/>
    })
  )
}

export default App
