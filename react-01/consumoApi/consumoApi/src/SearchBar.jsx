import { useState } from "react";

function SearchBar({onSearch}) {
    const [query, setQuery] = useState('');//almacena el texto ingresado


    const handLesSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handLesSearch} style={{ marginBottom: '2px'}}>
            <input
            type="text"
            placeholder="Bucar pelicula..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}// acatualiza ele stado del texto
            style={{width: '80%', padding: '10px'}}
            />
            <button type="submit" style={{padding:'10px'}}>
                Buscar
            </button>
        </form>
    );
};
export default SearchBar;