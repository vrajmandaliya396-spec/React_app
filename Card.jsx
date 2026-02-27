import React, { use } from 'react'

const Card = async () => {


    

  return (
    <div className='main'>
      <div className='card-div'>
      <img src={props.img} alt="" />
      <h1>{props.username}</h1>
      <h2>{props.Profestion}</h2>
      <h2>{props.age}</h2>
      </div>
    </div>
  )
}

export default Card
