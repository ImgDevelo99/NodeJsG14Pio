import { useState } from 'react'
import TodoList from './TodoList';
import TodoInput from './TodoInput';

import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  
  const addTask = (text) => {
    const newTask = {id: Date.now(),  text, completed: false};//creamos un objeto un id, no completad
    setTasks([tasks, newTask]); // actualizar el estado agregando la nueva tarea al array 
  };
  
  const toggleTask = (id) => {
    const UpdateTasks = tasks.map((task) => {
      task.id === id ? { task, completed: !task.completed }: task
    });//si id===id se cambia el estado a lo contrarip del valor inicial
    setTasks(UpdateTasks);//actualiza el estado
  };

const deleteTask = (id) => {
  const filteredTask = tasks.filter((task) =>  task.id != id);//filtrar las tares menos la que tiene el ID espeficico
  setTasks(filteredTask);// actualice el estado
};

return(
  <div>
    <h1>Lista de tareas</h1>
    <TodoInput addTask={addTask} />{/*componente para añadir tareas*/}
    <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/>{/*componente para renderizar la lista*/}
  </div>
)
}

export default App
