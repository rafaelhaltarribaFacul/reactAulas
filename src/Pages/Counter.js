import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const Incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  const alterarTitulo = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={Incrementar} >Incrementar</button>
      <input type="text" onChange={alterarTitulo} />
    </div>
  );
}
export default Counter;