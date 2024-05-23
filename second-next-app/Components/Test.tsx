"use client";
import React from "react";
import Test2 from "./Test2";

const Test = ({children}) => {
  console.log("client component");

  return <div>
    Test
    {children}
  </div>;
};

export default Test;
