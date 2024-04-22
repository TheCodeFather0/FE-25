import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const reqemiArtir = () => setCount(count + 1);
  const reqemiAzalt = () => setCount(count - 1);
  const reqemiSifirla = () => setCount(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={reqemiAzalt}>azalt</button>
      <button onClick={reqemiArtir}>artir</button>
      <button onClick={reqemiSifirla}>artir</button>
    </div>
  );
};

export default Counter;