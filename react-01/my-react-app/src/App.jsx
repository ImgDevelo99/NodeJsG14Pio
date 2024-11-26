import { useState } from "react"



function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador +1 );
  };

   const decremento = () => {
    setContador(contador -1 );
  };

  const resetear = () => {
    setContador(0);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mi primer contador</h1>
      <h2>{contador}</h2>
      <button onClick={incrementar} style={{marginRight: "10px"}}>Incrementar </button>
      <button onClick={resetear} style={{marginRight: "10px"}}>Resetear</button>
      <button onClick={decremento} style={{marginRight: "10px"}}>Resetear</button>

    </div>
  );
  
}
export default App
