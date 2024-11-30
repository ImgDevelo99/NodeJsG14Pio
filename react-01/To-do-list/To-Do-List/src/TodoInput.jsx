import { useState } from 'react'
// /* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

function TodoInput ({ addTask}) {//se utiliza desestructuracion de props para extraer directamente la funcion addTask
    const [inputValue, setInputValue] = useState('');//  estado para almacenar el texto ingresado

    const handLesSubmit = (e) => {
        e.preventDefault(); //evitarme que el formulario se recargue la pagina al enviarse
        if(inputValue.trim() !== ''){
            addTask(inputValue);//llamamos la funcion  addTask  recibida como prop añadir la tarea ingresada
            setInputValue(''); // limpiar el campo de texto
        }
    };

    return(
        <form onSubmit={handLesSubmit}> 
        <input type="text"
            placeholder='Agregar tarea'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}//actualiza el estado con el texto ingresado
        />
        <button className='boton' type='submit'>Agregar</button>
        </form>
    )
};
//validacion de porps con propTypes
TodoInput.propTypes = {
    addTask: PropTypes.func.isRequired, 
};
export default TodoInput;