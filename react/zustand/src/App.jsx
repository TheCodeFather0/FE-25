import React, { useEffect, useState } from "react";

const App = () => {
  const [users,setUsers] = useState()
  const url = import.meta.env.VITE_API_URL

  useEffect(() => {
    fetch(url).then((res) => {
      return res.json()
    }).then((data) =>{
      setUsers(data);
    })
  },[])
  
  return <ul>
    {
      users?.map(({id,username}) => {
        return <li key={id}>{username}</li>
      })
    }
  </ul>;
};

export default App;
