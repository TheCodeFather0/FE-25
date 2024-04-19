import Card from "./Card";
import React from "react";
import { data } from "../data";

const Cards = () => {
  return (
    <div className="container">
      {data.map(({ id, title, desc, imgSrc }) => {
        return <Card key={id} title={title} desc={desc} imgSrc={imgSrc} />;
      })}
    </div>
  );
};

export default Cards;
