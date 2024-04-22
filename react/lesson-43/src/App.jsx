import "./css/style.css";
import React, { useState } from "react";
import { data } from "./data";
import Info from "./Components/Info";
import Card from "./Components/Card";
import MyComponent from "./Components/MyComponent";
import Counter from "./Components/Counter";
import ShowHide from "./Components/ShowHide";
import DarkLightMode from "./Components/DarkLightMode";
import TodoList from "./Components/TodoList";

const App = () => {
  const users = ["Tural", "Ayxan", "Mahir", "Kamran"];
  const [mode,setMode] = useState('light')

    const changeMode = () => {
    if (mode === 'dark') {
        setMode('light')
    }else {
        setMode('dark')
    }
    }
  return (
    <div className={mode}>
        {/* <button onClick={changeMode}>{
          mode === 'dark' ? 'light' : 'dark'
        }</button> */}

      {/* <div className="container">
     {data.map(({ id, title, desc, imgSrc }) => {
        return <Card key={id} title={title} desc={desc} imgSrc={imgSrc} />;
      })}
     </div>
      <Info /> */}
      {/* {
        users.map((ad,index) => {
          return <MyComponent user={ad} key={index}/>
        })
      } */}

      {/* <Counter /> */}
      {/* <ShowHide />
      <DarkLightMode /> */}

      <TodoList />
    </div>
  );
};

export default App;
