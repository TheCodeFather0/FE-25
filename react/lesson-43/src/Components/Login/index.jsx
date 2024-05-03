import React, { useContext, useRef } from 'react'
import { IsLoggedInContext } from '../../Context/IsLoggedIn';

const Login = () => {
  const [isLogin,handleLogin] = useContext(IsLoggedInContext)
  const usernameRef = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username:usernameRef.current.value,
      password: passRef.current.value
    }
    handleLogin(user)
  };
  return (
  <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="username" ref={usernameRef} />
          <input type="password" placeholder="password" ref={passRef} />
          <button type="submit">submit</button>
        </form>
      </div>
  )
}

export default Login