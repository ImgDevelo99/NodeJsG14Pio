/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; //la mejor solucion es importar y definir las validaciones en el componente

function TodoItem({ task, toggleTask, deleteTask }) {
  return (
    <li>
      <span
        onClick={() => toggleTask(task.id)} // Llamamos a `toggleTask` con el ID de la tarea al hacer clic.
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }} // Aplicamos un estilo de texto tachado si la tarea está completada.
      >
        {task.text} {/* Mostramos el texto de la tarea */}
      </span>
      <button  className = "delete" onClick={() => deleteTask(task.id)}>Eliminar</button> {/* Botón para eliminar la tarea */}
    </li>
  );
}

// Validación de propiedades con PropTypes
TodoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // ID puede ser un string o un número.
    text: PropTypes.string.isRequired, // El texto de la tarea debe ser una cadena.
    completed: PropTypes.bool.isRequired, // El estado de completado debe ser booleano.
  }).isRequired, // `task` es un objeto obligatorio con la estructura definida.
  toggleTask: PropTypes.func.isRequired, // `toggleTask` debe ser una función y es obligatoria.
  deleteTask: PropTypes.func.isRequired, // `deleteTask` debe ser una función y es obligatoria.
};



export default TodoItem; // Exportamos el componente.
