import React, { useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  const changeShow = () => setShow(!show);
  return (
    <div>
      <button onClick={changeShow}>{show ? "hide" : "show"}</button>
      <h2>men {show ? "burdayam" : "gizlenmisem"}</h2>
    </div>
  );
};

export default ShowHide;
