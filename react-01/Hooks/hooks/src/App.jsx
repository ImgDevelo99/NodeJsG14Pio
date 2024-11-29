
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
// import { useEffect, useState } from 'react';

// function App() {
//   const [segundos, setSegundos] = useState(0);

//   useEffect(() => {//es efecto se ejecuta despues de el componente se renderize
//     const intervalo = setInterval(() => {// creamos un temporizador ejecuta una funcion en cada intervalo
//       setSegundos(segundos => segundos + 1);//actualiza el estado,
//     }, 1000);

//     return () => clearInterval(intervalo); // Limpieza
//   }, []); // Ejecuta solo una vez-dependencia esta vacio [] = indicanto la cierre de useEffect

//   return <p>Tiempo transcurrido: {segundos} segundos</p>;//
// }
// export default App

//hook useContext------------------------------------------------
import { useContext, createContext } from 'react';

const TemaContext = createContext('claro');//creamos un contexto llamda TemaContext (claro)

function Componente() {//
  const tema = useContext(TemaContext);// para acceder al valor del contexto
  <div style={{ background: tema === "oscuro" ? '#333' : '#fff', color : tema === 'oscuro' ? ' #fff' : '#000'}}>
  <p>El tema actual es: {tema}</p>;
  </div>
}

function App() {
  return (
    <TemaContext.Provider value="oscuro">
      <Componente />
    </TemaContext.Provider>
  );
}
export default App