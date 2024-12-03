import MovieItem from './MovieItem';

function MovieList({movies}){
    if(movies.length === 0){
        return <p>No se encontro peliculas</p>
    }

    return(
        <ul style={{ listStyle: 'none', padding: 0}}>
        {movies.map((movie) => (// con el metodo map recorre el array
            <MovieItem key={movie.imdbID} movie={movie}/>//rederizamos un componente y pasamos dos prop
        ))}

        </ul>
    );
}

export default MovieList;