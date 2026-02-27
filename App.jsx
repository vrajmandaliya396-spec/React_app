import axios from 'axios'
import React, { useState } from 'react'
import { div } from 'three/tsl';

const App =  () => {

  const [data, setData] = useState([]);

  const get_data = async () =>{
    const response = await axios.get("https://picsum.photos/v2/list")
    console.log(response);
    setData(response.data)
    console.log(data);
    
  }

  return (
    <div className='main'> 
      <button onClick={get_data}>GetData</button>
      {
        data.map((elem)=>{
            return <div className='img_container'>
              <img src={elem.download_url} alt="" />
              <h1>{elem.author}</h1>
              </div>
        })
      }
    </div>
  )
}

export default App
