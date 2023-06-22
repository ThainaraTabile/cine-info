import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../../componentes/MovieCard";
import { urlSearch, chaveApi } from "../../api/config-api";
import { Link } from "react-router-dom";

const FilmesFiltrados = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("q");

    const [filmes, setFilmes] = useState([]);



    useEffect(() => {
        const fetchFilmes = async () => {
            try {
                const url = `${urlSearch}?api_key=${chaveApi}&query=${query}`;
                const response = await fetch(url);
                const data = await response.json();
                setFilmes(data.results);
            } catch (error) {
                console.log(error);
            }
        };

        if (query) {
            fetchFilmes();
        }
    }, [query]);

    return (
        <div className="container">
            <div className="container-inicio">
                <Link to='/'>inicio</Link>
            </div>
            <h2 className="title">Resultados para: {query}</h2>
            <div className="filmes-container">
                {filmes &&
                    filmes.map((filme) => (
                        <MovieCard key={filme.id} filme={filme} />
                    ))}
            </div>
        </div>
    );
};

export default FilmesFiltrados;

