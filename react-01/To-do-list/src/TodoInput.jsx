/* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types *///no es recomendado


import React, { useState } from 'react'; // Importamos React y el hook `useState`.
import PropTypes from 'prop-types'; //la mejor solucion es importar y definir las validaciones en el componente


function TodoInput({ addTask }) {
  const [inputValue, setInputValue] = useState(''); // Estado local para almacenar el texto ingresado.

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitamos que el formulario recargue la página al enviarse.
    if (inputValue.trim() !== '') { // Verificamos que el texto no esté vacío.
      addTask(inputValue); // Llamamos a la función `addTask` recibida como prop para añadir la tarea.
      setInputValue(''); // Limpiamos el campo de texto.
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Formulario para capturar la tarea */}
      <input
        type="text"
        placeholder="Agregar nueva tarea"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Actualizamos el estado con el texto ingresado.
      />
      <button type="submit">Agregar</button> {/* Botón para enviar el formulario */}
    </form>
  );
}
// Validación de propiedades con PropTypes
TodoInput.propTypes = {
  addTask: PropTypes.func.isRequired, // `addTask` debe ser una función y es obligatoria.
};
export default TodoInput; // Exportamos el componente.
