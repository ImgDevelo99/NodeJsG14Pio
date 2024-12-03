
function MovieItem({movie}){
    return(
        <li style={{marginBottom: '20px', display:'flex', alignItems:'center'}}>
            <img
            src={movie.Poster}
            alt={movie.Title}
            style={{width: '100px', marginRight:'20px'}}
            />
            <div>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
        </li>
    );
}

export default MovieItem;