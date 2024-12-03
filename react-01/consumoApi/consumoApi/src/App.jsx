import { useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import SearchBar from './SearchBar';


function App(){
  const [movies, setMovies] = useState([]);// estado para almacenar la pelicula
  const [isLoading, setIsLoading] = useState(false);//gestiona los datos de carga si estan en proceso
  const [error, setError] = useState('');// manejo el estado de errores

  //funcion para buscar pelicula
  const fetchMovies = async (query) => {// hace la solicitud http
    //iniciar estado de carga
    setIsLoading(true);
    setError('');//limpia el error previo a la solicitud

    try {
      //realizar la solicitud de la API
      const {data} = await axios.get('http://www.omdbapi.com/',{
        params: {
          s: query,
          apikey: '421f5798',//
        },
      });

      //comprobar respuesta y actualizacion de estado
      if (data.Response === 'True'){
        setMovies(data.Search);//guarda la lista de peliculas
      }else{
        setError(data.Error);//
      }
    } catch (error){
      setError('Hubo un problema de conexion con la api');
    }finally{
      setIsLoading(false);
    }
  };

  return (
    <div style={{maxWidth: '800px', margin: 'auto'}}>
      <h2 style={{ textAlign:'center'}}>Buscar pelicula</h2>
      <SearchBar onSearch={fetchMovies}/>
      {isLoading && <p>Cargando......</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      <MovieList movies={movies}/>
    </div>
  );
}
export default App
