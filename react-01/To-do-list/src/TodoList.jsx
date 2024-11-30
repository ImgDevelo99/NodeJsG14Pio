
import TodoItem from './TodoItem'; // Importamos el componente individual de tarea.
import PropTypes from 'prop-types'; //la mejor solucion es importar y definir las validaciones en el componente

function TodoList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id} // React necesita una clave única para cada elemento de lista.
          task={task} // Pasamos la tarea completa como prop.
          toggleTask={toggleTask} // Pasamos la función para alternar completado.
          deleteTask={deleteTask} // Pasamos la función para eliminar la tarea.
        />
      ))}
    </ul>
  );
}
// Validación de propiedades con PropTypes
TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // ID puede ser string o número.
      text: PropTypes.string.isRequired, // El texto de la tarea debe ser una cadena.
      completed: PropTypes.bool.isRequired, // El estado de completado debe ser booleano.
    })
  ).isRequired, // `tasks` es un array obligatorio de objetos con esta estructura.
  toggleTask: PropTypes.func.isRequired, // `toggleTask` debe ser una función y es obligatoria.
  deleteTask: PropTypes.func.isRequired, // `deleteTask` debe ser una función y es obligatoria.
};

export default TodoList; // Exportamos el componente.
