import "./css/style.css";
import React from "react";
import Info from "./Components/Info";
import Cards from "./Components/Cards";

const App = () => {
  return (
    <div className="mainContent">
      <Cards />
      <Info />
    </div>
  );
};

export default App;
