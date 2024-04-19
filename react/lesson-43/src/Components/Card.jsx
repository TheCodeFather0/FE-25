import React from "react";

const Card = ({title,desc,imgSrc}) => {
  return (
    <div className="card">
      <img src={imgSrc} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
