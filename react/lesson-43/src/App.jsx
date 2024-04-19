import "./css/style.css";
import React from "react";
import { data } from "./data";
import Card from "./Components/Card";

const App = () => {
  return (
    <div className="mainContent">
      <div className="container">
        {data.map(({ id, title, desc, imgSrc }) => {
          return <Card key={id} title={title} desc={desc} imgSrc={imgSrc} />;
        })}
      </div>
    </div>
  );
};

export default App;
