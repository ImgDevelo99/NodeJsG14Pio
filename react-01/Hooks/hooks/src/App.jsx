
//hooks useState----------------------------------------------------
// import { useState } from 'react'

// function App() {
//   const [contador, setContador] = useState(0); // contador inicial: 0

//   return (
//     <div>
//       <p>El contador es: {contador}</p>
//       <button onClick={() => setContador(contador + 1)}>Incrementar</button>
//     </div>
//   );
// }

// export default App
//hook useEffect--------------------------------------------------------
import { useEffect, useState } from 'react';

function App() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(segundos => segundos + 1);
    }, 1000);

    return () => clearInterval(intervalo); // Limpieza
  }, []); // Ejecuta solo una vez

  return <p>Tiempo transcurrido: {segundos} segundos</p>;
}
export default App