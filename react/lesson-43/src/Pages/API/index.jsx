import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {
  const url = "https://rickandmortyapi.com/api/character/";
  const [data,setData] = useState([]);


  useEffect(() => {
    (async() => {
      const {data} = await axios(url)
      setData(data.results)
    })()
  },[])

  return (
    <div>{
      data.map(({name,id}) => {
        return <h2 key={id}>{name}</h2>
      })
    
    }</div>
  )
}

export default Api