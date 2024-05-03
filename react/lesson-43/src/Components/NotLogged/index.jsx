import React from 'react'
import { Link } from 'react-router-dom'

const NotLogged = () => {
  return (
    <div>
        <h2>Qaqa giriş eləmək lazımdır.</h2>
        <h3>Giriş üçün linkə tıkla...</h3>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default NotLogged