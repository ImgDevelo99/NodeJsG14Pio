// import { useState } from 'react'//manejar los estados

// import './App.css'

// function App() {
//   const [num1, setNum1] = useState("");//estado par ael primer nuemro
//   const [num2, setNum2] = useState("");
//   const [resultado, setResultado] = useState();// estado para almacenar el resultado
 
//   //funcion para sumar los dos numeros
//   const suma = () => {
//     setResultado(parseFloat(num1) + parseFloat(num2));
//   };
//    return(
//   <div>

//     <div>
//     <h1>Calculadora</h1>

//     <input
//     type='number'
//     placeholder='Numero 1'
//     value= {num1}
//     onChange={(e) => setNum1(e.target.value)}//se activa cada vez que cambie el valor
//     />

// <input
//     type='number'
//     placeholder='Numero 2'
//     value= {num2}
//     onChange={(e) => setNum2(e.target.value)}//se activa cada vez que cambie el valor
//     />
//     </div>

//     <button onClick={suma} style={{marginBottom: "20px"}}>
//       Sumar
//     </button>
//     <h2>Resultado: {resultado}</h2>
   
//     </div>
//    );
// }
// export default App

//import { useState } from 'react'//manejar los estados
import WelcomCard from "./WelcomeCard.jsx";

function App() {
  return (
    <div>
      <h1>Bienvenidos a nuestra pagina</h1>
      <WelcomCard name = "Juan"/> {/*renderizar el componente y le pasamos un prop name */}
      <WelcomCard name = "Carlos"/>
      <WelcomCard name = "Gabriela"/>
      <WelcomCard name = "Alejandra"/>
    </div>
  );
}

export default App