import { createContext, useState } from "react";


export const IsLoggedInContext = createContext();

export const IsLoggedInContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(localStorage.getItem('isLogged') === "true" || false);
  const handleLogin = ({username,password}) => {
    if(username.trim() && password.trim()) {
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('isLogged',true)
            setIsLogged(localStorage.getItem("isLogged"))
            window.location = '/'
        }else {
            alert("username or passowrd is invalid")
        }
    }else {
        alert('bos buraxmaq olmaz')
    }

  }

  const handleLogout = () => {
    localStorage.setItem('isLogged',false)
    setIsLogged(localStorage.getItem("isLogged"))
    window.location = '/login'
  }
  return (
    <IsLoggedInContext.Provider value={[isLogged,handleLogin,handleLogout]}>
      {children}
    </IsLoggedInContext.Provider>
  );
};
