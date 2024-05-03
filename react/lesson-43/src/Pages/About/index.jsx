import React, { useContext } from 'react'
import { IsOnlineContext } from '../../Context/isOnlineContext'

const About = () => {
  const [online,handleClick] = useContext(IsOnlineContext)
  // console.log(isOnline);
  return (
    <div>
      <h2>About page</h2>
      <button onClick={handleClick}>change event</button>
      <p>user now {online ? "online" : 'offline'}</p>
    </div>
  )
}

export default About